import MyForm from 'mobx-react-form';
import dvr from 'mobx-react-form/lib/validators/DVR';
import { ChangeEvent } from 'react';
import validatorjs from 'validatorjs';
import { formStore } from '../../Store/FormStore';
import { countryList } from './Countries';

const plugins = { dvr: dvr(validatorjs) };

const handlers = {
  onChange:
    (field: any) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      if (field.type === 'checkbox') {
        if (e.target.checked) {
          field.set(e.target.value);
        } else {
          field.set(null);
        }
      } else {
        field.set(e.target.value);
      }
    },
  onDrop:
    (field: any) =>
    (e: ChangeEvent<HTMLInputElement>): void => {
      field.validate({ showErrors: true });
      field.set(e.target.value);
    },
};

const fields = [
  {
    name: 'name',
    label: 'Name',
    placeholder: 'Insert your name',
    type: 'text',
    rules: 'required|string',
    error: 'You must insert',
    handlers,
  },
  {
    name: 'surname',
    label: 'Surname',
    placeholder: 'Insert your surname',
    type: 'text',
    rules: 'required|string',
    handlers,
  },
  {
    name: 'country',
    label: 'Country',
    placeholder: 'Select your country',
    options: countryList.map((country) => ({ value: country, label: country })),
    type: 'select',
    rules: 'required|string',
    handlers,
  },
  {
    name: 'birthDate',
    label: 'Birth Date',
    placeholder: 'Enter your birth date',
    value: '',
    type: 'date',
    rules: 'required|date',
    handlers,
  },
  {
    name: 'avatar',
    label: 'Avatar',
    rules: 'required',
    value: '',
    type: 'file',
    handlers,
  },
  {
    name: 'agreement',
    label: 'Accept the agreement',
    value: '',
    type: 'checkbox',
    rules: 'required',
    handlers,
  },
];

const { setStorage } = formStore;

const validationHooks = {
  onSuccess(form: any) {
    setStorage(form.values());
  },
  onError(form: any) {
    console.log('All form errors', form.errors());
  },
};

const FormUtils = new MyForm(
  { fields },
  {
    plugins,
    hooks: validationHooks,
  }
);

export default FormUtils;