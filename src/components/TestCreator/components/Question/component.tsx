import React, { useContext, useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, FormControl, FormControlLabel, FormLabel, Grid, IconButton, Pagination, PaginationItem, Paper, Radio, RadioGroup, Stack, TextField, colors } from '@mui/material';
import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import styles from'./style.module.css'
import DeleteIcon from '@mui/icons-material/Delete';
import RaDioInput from '../RaDioInput';
import styled from '@emotion/styled';
import Input from '../Input/component';

//background: 'linear-gradient(to left, #333, #333 50%, #eee 75%, #333 75%);'

const StyledRaDioInput = styled(RaDioInput)(({ theme }) => ({
}));

const StyledInput = styled(Input)(({ theme }) => ({
  
}));

type IItem = {
  id: string | number;  
}

export interface IQuestion  {
  onDelete?(id: string | undefined): void;
  id?: any; //!He?
}
//linear-gradient(to right bottom,#7a95ec, #77eeb9)
export default function Question(props: IQuestion) {


  const [inputs,setInputs] = useState<IItem[]>([]);

  function handleDeleteItem(id: IItem['id']): void {
    setInputs(inputs.filter(x => x.id !== id));
  }

  function handleAddItem(id: IItem['id']): void {
    setInputs([...inputs, { id }]);
  }

  function handleDelete(): void {
    props.onDelete && props.onDelete(props.id);
  }

    return (
      <Paper
        sx={{
          p: 4,
          width: 1,
          alignContent: 'center',
          background: 'linear-gradient(to left bottom, #7a95ec, rgb(255,255,255)  )',
        }}
      >
        <Stack 
          spacing = {1}
          direction = 'column'
          alignContent={'center'}
          sx={{
          }}
          >
        <Input 
          sx={{ mb: 5 }}
          placeholder='Вариант вопроса'
          InputProps={{
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
          
          />
          <RadioGroup onChange={e => console.log(e.currentTarget.value)}>
          {inputs.map(x => (
            <StyledRaDioInput 
              key={x.id}
              textFieldProps={{
                placeholder:'Вариант ответа',
              }}
              value={x.id}
              onDelete={e => handleDeleteItem(x.id)}
            />
          ))}
          </RadioGroup>
        <Button
        onClick={e => handleAddItem(crypto.randomUUID())}
          >
          Добавить вариант ответа
        </Button>
        </Stack>
        </Paper>
      
    );
}
