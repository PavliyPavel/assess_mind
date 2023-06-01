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
import { Button, CardMedia, Grid, Pagination, PaginationItem, Paper, Stack, colors } from '@mui/material';
import { ArrowBack, ArrowForward, BorderAll, BorderAllRounded } from '@mui/icons-material';
import styles from'./style.module.css'
import TestHeader from '../../components/TestHeader/component';
import TestsMenu from '../../components/TestsMenu';
import TestCreator from '../../components/TestCreator';
import MyTestsMenu from '../../components/MyTestsMenu';
import MyTestHeader from '../../components/MyTestHeader';

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
      width: '50ch',
    },
  },
}));

const HeaderTest = styled(Paper)(({ theme }) => ({
  
}));

export default function MainForm() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const authContext = useContext(AuthContext);
  const navigator = useNavigate();
  
  useEffect(() => {
    if (!authContext.isAuth) {
    navigator('/auth');
    }
  });


  // if (!authContext.isAuth) {
  //   navigator('/auth');
    
  // }

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Профиль</MenuItem>
      <MenuItem onClick={handleMenuClose}>Мои тесты</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
      </MenuItem>
    </Menu>
  );

  return (
    
    <Stack flexGrow ={1} >
      
      <AppBar position="static"
      >
        <Toolbar
      
         sx={{
          display: 'flex',
          alignContent: 'center',
          textAlign: 'center',
          alignSelf: 'center'
          
         }} >
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              display: { xs: 'none', sm: 'block' } 
            }}
          >
            <Link  to="/">
              Assess mind
            </Link>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Поиск…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
            <Button  size="small" variant="outlined"  sx={{background: '#dddddd',color: 'white', m: 2 }}>Создать тест</Button>
            <Button size="small" variant="outlined"  sx={{color: 'white',background: 'black'}}>Мои тесты</Button>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              //onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>

          </Box>
        </Toolbar>
      </AppBar>
      <Stack
      sx={{
        background: 'linear-gradient(to left bottom, #7a95ec, rgb(255,255,255))',
        backgroundSize: 'cover'
      }}
      p={2}
      alignItems={'center'}
      height={1}
      overflow={'auto'}
      >
       <MyTestsMenu></MyTestsMenu>
      </Stack>
    </Stack>
    

    
  );
}
