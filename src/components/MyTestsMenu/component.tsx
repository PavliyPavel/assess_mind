import React, { useContext, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';

import { Button, Grid, InputBase, Pagination, PaginationItem, Paper, Stack } from '@mui/material';
import { ArrowBack, ArrowForward, BorderAll, BorderAllRounded } from '@mui/icons-material';
import styles from'./style.module.css'
import TestHeader from '../TestHeader/component';
import MyTestHeader from '../MyTestHeader';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const HeaderTest = styled(Paper)(({ theme }) => ({
  
}));

export default function TestsMenu() {
  return (
      <Stack padding={1}  className={styles.pagination} spacing={1} flexGrow={1}>
        <Box display="flex" flexGrow={1} sx={{alignContent:"center"}}>
          <Grid container spacing={{ xs: 2, sm: 2, md: 2 }} columns={{ xs: 6, sm: 9, md: 12 }}>
            {Array.from(Array(8)).map((_, index) => (
              <Grid item width={150} xs={3} sm={3} md={3} key={index}>
                <MyTestHeader />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Pagination 
          count={2}
          renderItem={(item) => (
            <PaginationItem 
              {...item}
              slots={{ previous: ArrowBack, next: ArrowForward }}
            />
          )}
        />
      </Stack>
  );
}
