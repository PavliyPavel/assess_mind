import React, { useContext, useEffect } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../context/auth-context';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Pagination, PaginationItem, Paper, Stack } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import styles from'./style.module.css'



export default function TestHeader() {
  return (
    <Button  size="small" sx={{background: 'white'}}>
    <Card>
    <CardMedia
      sx={{ height: 140 }}
      image="https://static.thenounproject.com/png/607009-200.png"
      title="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
    <CardActions >
    </CardActions>
  </Card>
  </Button>
  );
}
