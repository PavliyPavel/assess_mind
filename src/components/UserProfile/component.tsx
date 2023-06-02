import React, { useContext, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Card, Grid, IconButton, InputBase, Pagination, PaginationItem, Paper, Stack, SvgIcon, TextField } from '@mui/material';
import { AccountCircle, ArrowBack, ArrowForward, BorderAll, BorderAllRounded } from '@mui/icons-material';
import styles from'./style.module.css'
import TestHeader from '../TestHeader/component';
import MyTestsMenu from '../MyTestsMenu';
import MyProfileTestsMenu from './MyProfileTestsMenu';


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

export default function UserProfile() {
  return (
      <Stack 
      paddingLeft= {5}
      direction="row"
      width='100%'
      height='100%'
    >
        <Box 
        alignContent='center'
        sx={{
          width: '300px', 
          height: '100%',
          background: 'rgb(25,118,210)'
          }}>
            <Stack spacing={2}>
              <Button
                aria-label="account of current user"
                //onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle sx={{
                  fontSize: 240,
                }} />
              </Button>
              <TextField
                disabled
                value={'qweqr'}
              >
              </TextField>
              <TextField
                disabled
                value={'qweqr'}
              >
              </TextField>
              <Box paddingRight={4} textAlign={'end'}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  //onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <EditIcon color='warning' />
                </IconButton>
              </Box>
            </Stack>
        </Box>
        <MyProfileTestsMenu/>
      </Stack>
  );
}
