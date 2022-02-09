import React from 'react';
import Sidebar from './Sidebar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import Typography from '@mui/material/Typography';
import "./IntroComponent.css";
import InfoContainer from './InfoContainer';




const IntroComponent = () => {
      
    const theme = createTheme({
        palette: {
          white: {
            // This is green.A700 as hex.
            main: '#FFFFFF',
          },
          site:{
              main: '#303956',
          }
        },
    });
    
    theme.typography.h3 = {
        fontSize: '2.5  rem',
        '@media (min-width:600px)': {
          fontSize: '3rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '5rem',
        },
    };
    
    return (
        <ThemeProvider theme={theme}>
        <div className='img'>
            
            <Sidebar />
            <div className='content'>
            <Typography
            variant="h3"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" } }} 
            style={{marginTop: "180px", color: "white"}}
          >
              Learn to Code
          </Typography>
            <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }} 
            style={{color: "white"}}
          >
              Business, Technology and Creative Skills taught by industry experts.<br/>
                Explore a wide range of skills with our professional tutorials.
          </Typography>
            <div className='browse-button'><Button variant="contained" color='white' size='large'>Browse Courses</Button></div>
            <div className='teacher-button'><Button color='white'>Are you a teacher?</Button></div>
            </div>
        </div>
        <InfoContainer />
        </ThemeProvider>
    );
};

export default IntroComponent;