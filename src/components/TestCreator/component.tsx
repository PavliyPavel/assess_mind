import React, { useContext, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Pagination, PaginationItem, Paper, Stack, TextField, styled } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styles from'./style.module.css'
import RaDioInput from './components/RaDioInput';
import Question from './components/Question';
import Input from './components/Input';



const StyledInput = styled(Input)(({ theme }) => ({
  width: 800
}));

type IItem = {
  id: string | number;  
}



export default function TestCreator() {
const [questions,setQuestions] = useState<IItem[]>([]);

function handleAddItem(id: IItem['id']): void {
  setQuestions([...questions, { id }]);
}

function handleDeleteItem(id: IItem['id']): void {
  setQuestions(questions.filter(x => x.id !== id));
}

  return (
    <Paper
      sx={{
        p: 4,
        width: 900,
        alignItems: 'center',
        background: 'linear-gradient(to left bottom, #7a95ec, rgb(144,215,55)  )',
      }}
    >
      <Stack
      display={'flex'}
      spacing={2}
      alignContent={'center'}
      alignItems={'center'}
      >
        <StyledInput 
          sx={{ mb: 1 }}
          placeholder='Название теста'
          />
       {questions.map(x => (
            <Question 
              key={x.id}
              onDelete={e => handleDeleteItem(x.id)}
            />
          ))}
        <Button
        onClick={e => handleAddItem(crypto.randomUUID())}
        >Добавить вопрос</Button>
      </Stack>

    </Paper>
    
  );
}
