import React from 'react';
import { observer } from 'mobx-react-lite';
import './Input.css';
import { InputProps } from '../../Types/FormTypes';

const Input: React.FC<InputProps> = observer(({ field, type }) => {
  const renderInput = () => {
    switch (type) {
      case 'text':
        return (
          <input
            type={type}
            className="form_input"
            id={field.name}
            placeholder={field.placeholder}
            value={field.value as string}
            onChange={field.onChange}
            aria-describedby="name-desc"
            {...field.bind({ type })}
          />
        );
      case 'select':
        return (
          <select
            id={field.name}
            className="form_input"
            value={field.value as string}
            onChange={field.onChange}
            aria-describedby="name-desc"
            {...field.bind({ type })}
          >
            {field.options?.map(
              (option: { value: string | number; label: string }) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              )
            )}
          </select>
        );
      case 'date':
        return (
          <input
            type={type}
            className="form_input"
            id={field.name}
            placeholder={field.placeholder}
            value={field.value as string}
            onChange={field.onChange}
            {...field.bind({ type })}
          />
        );
      case 'file':
        return (
          <input
            type={type}
            id={field.name}
            className="form_input"
            value={field.value?.toString()}
            {...field.bind({ type })}
            onChange={field.onChange}
          />
        );
      case 'checkbox':
        return (
          <input
            type={type}
            id={field.name}
            onChange={field.onChange}
            className="form_checkbox"
          />
        );
      default:
        return null;
    }
  };

  const Fields = (
    <>
      <label htmlFor={field.name} className="form_label">
        {field.label}
      </label>
      {renderInput()}
    </>
  );

  const drawInput = () => {
    return type === 'checkbox' ? (
      <div className="form_input_wrapper_checkbox">
        <div className="fields">{Fields}</div>
        {field.error && <span className="form_error">{field.error}</span>}
      </div>
    ) : (
      <div className="form_input_wrapper">
        {Fields}
        {field.error && <span className="form_error">{field.error}</span>}
      </div>
    );
  };

  return drawInput();
});

export default Input;
