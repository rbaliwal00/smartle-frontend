import React, { useEffect, useState } from 'react';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { blueGrey } from '@mui/material/colors';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const AppbarLinks = () => {
    const pages = ['Home','Courses', 'Paths', 'Pricing', 'Teachers'];
    const [showBrowerserCourses, setShowBrowserCourse] = useState(false);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const theme = createTheme({
        palette: {
          gray: {
            light: '#ff7961',
            main: '##263238',
            dark: '#ba000d',
            contrastText: '#000',
          },
        },
      });

    return (
       
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" }, mt: 1 }}>
         <Button
            key={"Home"}
            sx={{ my: 1, color: "white", display: "block" }}
            color='white'
            component={Link}
            to={"/Home"} 
          >
              Home
          </Button>
          <Button
            key={"Courses"}
            sx={{ mt: -1.5, color: "white", display: "block" }}
            color='white'
            onClick={handleClick}
          >
              Courses
          </Button>
          <Button
            key={"Paths"}
            sx={{ my: 1, color: "white", display: "block" }}
            color='white'
            component={Link}
            to={"/Paths"} 
          >
              Paths
          </Button>
          <Button
            key={"Pricing"}
            sx={{ my: 1, color: "white", display: "block" }}
            color='white'
            component={Link}
            to={"/Pricing"} 
          >
              Pricing
          </Button>
          <Button
            key={"Teachers"}
            sx={{ my: 1, color: "white", display: "block" }}
            color='white'
            component={Link}
            to={"/Teachers"} 
          >
              Teachers
          </Button>
         <Button
            sx={{ my: 1, display: "block" , color: "white"}}
          >
             <PeopleOutlinedIcon color="white" sx={{ fontSize: 30 }}/>
          </Button>
          <ThemeProvider theme={theme}>
          <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: -1,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              left: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{ horizontal: 'left', vertical: 'left' }}
      >
        <MenuItem>
                <Button
                 sx={{ fontSize: 14,  fontFamily: 'Raleway', fontWeight: "900"}}
                 color='gray'
                    component={Link}
                    to={"/courses"} 
                    >Browse Courses</Button>
        </MenuItem>
        <MenuItem>
                <Button
                    sx={{ fontSize: 14,  fontFamily: 'Raleway', fontWeight: "900"}}
                    color='gray'
                    component={Link}
                    to={"/preview"} 
                    >Preview Course</Button>
        </MenuItem>
        <MenuItem>
                <Button
                    size='small'
                    sx={{ fontSize: 14,  fontFamily: 'Raleway', fontWeight: "900"}}
                    component={Link}
                    color='gray'
                    to={"/Courses"} 
                    >Preview Lesson</Button>
        </MenuItem>
      </Menu>
      </ThemeProvider>
      </Box>
      
    );
};

export default AppbarLinks;