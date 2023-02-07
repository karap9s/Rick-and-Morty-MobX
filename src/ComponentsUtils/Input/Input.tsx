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
            {field.options?.map((option: any) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
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
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className='form_input_wrapper'>
      <label htmlFor={field.name} className="form_label">
        {field.label}
      </label>
      {renderInput()}
      {field.error && <span className='form_error'>{field.error}</span>}
    </div>
  );
});

export default Input;
