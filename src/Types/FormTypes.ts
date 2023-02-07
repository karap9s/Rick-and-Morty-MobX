export interface IFormCards {
  name: string;
  surname: string;
  birthDate: string;
  avatar: string;
  country: string;
  key: string;
}

export interface InputProps {
  field: {
    label: string;
    value: string | number | readonly string[];
    onChange: (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => void;
    placeholder?: string;
    error?: string;
    options?: Array<{ value: string | number; label: string }>;
    bind?: any;
    name?: string;
  };
  type: 'text' | 'select' | 'date' | 'file' | 'checkbox';
}