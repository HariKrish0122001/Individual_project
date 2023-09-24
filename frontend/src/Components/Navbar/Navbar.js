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

const pages = ['Dashboard', 'Add'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
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
  
  
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/dashboard"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
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
              color: 'inherit',
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
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              My Blogs
            </Button>
           
              <Button
              onClick={()=>{
                navigate('/addblog')
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Add
            </Button>
            
            <Button
              onClick={()=>{
                navigate('/general')
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              View all blogs
            </Button>
            <Button
              onClick={()=>{
                localStorage.removeItem('token')
                navigate('/')
              }}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Logout
            </Button>
            
          
          </Box>
         

         
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;