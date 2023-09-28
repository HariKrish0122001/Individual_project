import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import AddBlog from '../Addblog/addblog';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import userapiservice from '../../services/users/userapiservice';
import { useState } from 'react';



function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [user,setUser]=useState()
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const navigate=useNavigate()

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
  const userdata=async()=>{
    const user_id=localStorage.getItem('user_id')
    const user=await userapiservice.getusername(user_id)
    if(user){
      setUser(user)
    }
  
    
  }
  useEffect(()=>{
    userdata()
  },[])
  
  return (
    <AppBar position="static" style={{backgroundColor:"#A0AECD",color:'#000000'}}>
      <Container maxWidth="xl" style={{color:'black'}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="ab"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color:'black',
              textDecoration: 'none',
            }}
          >
            JBLOG
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem key={"My Blogs"} onClick={handleCloseNavMenu}>
                
                <Button
            onClick={()=>{
              navigate('/dashboard')
            }}
            sx={{ my: 2, display: 'block' }}
          >
           My Blogs
          </Button>
              </MenuItem>
                 <MenuItem key={"Add"} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">Add blog</Typography> */}
                  <Button
              onClick={()=>{
                navigate('/addblog')
              }}
              sx={{ my: 2, display: 'block' }}
            >
              Add Blog
            </Button>
                </MenuItem>
                <MenuItem key={"View"} onClick={handleCloseNavMenu}>
                  {/* <Typography textAlign="center">View all blogs</Typography> */}
                  <Button
              onClick={()=>{
                navigate('/general')
              }}
              sx={{ my: 2, display: 'block' }}
            >
             View all blogs
            </Button>
                </MenuItem>
                <MenuItem key={"Logout"} onClick={handleCloseNavMenu}>
                 
                  <Button
              onClick={()=>{
                localStorage.removeItem('token')
                localStorage.removeItem('user_id')
                localStorage.removeItem('blog_id')
                navigate('/')
              }}
              sx={{ my: 2, display: 'block' }}
            >
             Log Out
            </Button>
                </MenuItem>
                
              
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color:'black',
              textDecoration: 'none',
            }}
          >
           JBLOG
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <Button
              onClick={()=>{
                navigate('/dashboard')
              }}
              sx={{ my: 2, color:'black', display: 'block' }}
            >
              My Blogs
            </Button>
           
              <Button
              onClick={()=>{
                navigate('/addblog')
              }}
              sx={{ my: 2, color:'black', display: 'block' }}
            >
              Add
            </Button>
            
            <Button
              onClick={()=>{
                navigate('/general')
              }}
              sx={{ my: 2,color:'black', display: 'block' }}
            >
              View all blogs
            </Button>
            <Button
              onClick={()=>{
                localStorage.removeItem('token')
                navigate('/')
              }}
              sx={{ my: 2, color:'black', display: 'block' }}
            >
              Logout
            </Button>
            
          
          </Box>
          {/* {console.log(user.data)} */}
          
          {user ? (user.data.name):("asdasd")}
         

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;