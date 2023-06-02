import { Stack } from '@mui/material';
import React, { useContext, useEffect } from 'react';
import MainHeaderForm from '../../pages/MainHeaderForm';
import TestsMenu from '../../components/TestsMenu';




export default function MainForm() {
  return (
    <Stack flexGrow ={1} >
      <MainHeaderForm></MainHeaderForm>
    <Stack
          sx={{
            background: 'linear-gradient(to left bottom, #7a95ec, rgb(255,255,255))',
            backgroundSize: 'cover'
          }}
          alignItems={'center'}
          height={1}
          overflow={'auto'}
          >
            <TestsMenu></TestsMenu>
    </Stack>
        </Stack>
    
  );
}
