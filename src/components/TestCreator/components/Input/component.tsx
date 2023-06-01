import React, { useEffect, useState } from 'react';
import { StandardTextFieldProps, TextField } from '@mui/material';


export interface IInputProps extends StandardTextFieldProps {
  onValueChanged?(value: string): void;
}

export default function Input(props: IInputProps) {
  const [value,setValue] = useState<string>(''); 

  function handleValueChanged(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void {
    setValue(e.currentTarget.value);
  }

  function handleBlur(): void {
    props.onValueChanged && props.onValueChanged(value);
  }

  return (
    <TextField
      key={props.key}
      {...props}
      value={value}
      onChange={handleValueChanged}
      onBlur={handleBlur}
    />
  );
}
