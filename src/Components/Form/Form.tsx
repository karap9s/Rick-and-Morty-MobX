import './Form.css';
import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Input from '../../ComponentsUtils/Input/Input';
import FormCards from './FormCards';
import { formStore } from '../../Store/FormStore';

const Form: React.FC<any> = observer(({ form }) => {
  const { storage } = formStore;
  const { resetStorage } = formStore;

  useEffect(() => {
    localStorage.setItem('formStorage', JSON.stringify(storage));
  });

  return (
    <div className="form_wrapper">
      <form onSubmit={form.onSubmit} className="form">
        <Input field={form.$('name')} type="text" />
        <Input field={form.$('surname')} type="text" />
        <Input field={form.$('country')} type="select" />
        <Input field={form.$('birthDate')} type="date" />
        <Input field={form.$('avatar')} type="file" />
        <Input field={form.$('agreement')} type="checkbox" />

        <br />
        <div className="form_buttons_wrapper">
          <button type="submit" className="form_button" onClick={form.onSubmit}>
            Submit
          </button>
          <button type="button" className="form_button" onClick={form.onClear}>
            Clear Fields
          </button>
          <button type="button" className="form_button" onClick={resetStorage}>
            Delete Forms
          </button>
        </div>

        <p>{form.error}</p>
      </form>
      <div className="form_list_wrapper">
        {storage.length ? (
          storage.map((item, index) => {
            return (
              <FormCards
                key={`${item.key}-${index}`}
                name={item.name}
                surname={item.surname}
                birthDate={item.birthDate}
                avatar={item.avatar}
                country={item.country}
              />
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
});

export default Form;
