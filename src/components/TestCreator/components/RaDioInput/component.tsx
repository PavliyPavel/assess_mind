import React, { useContext, useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { BaseTextFieldProps, Box, IconButton, Radio, RadioProps, TextField, TextFieldProps, TextFieldVariants } from '@mui/material';
import styles from'./style.module.css'
import { Variant } from '@mui/material/styles/createTypography';
import Input, { IInputProps } from '../Input/component';

export interface IRaDioInputProps extends RadioProps {
  textFieldProps?: IInputProps;
  onDelete?(id: string | undefined): void;
}

export default function RaDioInput(props: IRaDioInputProps) {
  function handleValueChanged(value: string): void {
    
  }

  function handleDelete(): void {
    props.onDelete && props.onDelete(props.id);
  }

  return (
    <Input 
      {...props.textFieldProps}
      multiline
      InputProps={{
        startAdornment: (
          <Box>
            <Radio
              {...props}
              color="success"
            />
          </Box>
        ),
        endAdornment: (
          <IconButton 
            sx={{marginLeft: 2}} 
            aria-label="delete" 
            onClick={handleDelete}
          >
            <DeleteIcon color='error' />
          </IconButton>
        )
      }}
      onValueChanged={handleValueChanged}
    />
  );
}
