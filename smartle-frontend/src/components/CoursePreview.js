import { Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/system';
import React from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BarChartIcon from '@mui/icons-material/BarChart';
import Rating from '@mui/material/Rating';


const CoursePreview = () => {

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

    theme.typography.h2 = {
        fontSize: '2rem',
        '@media (min-width:600px)': {
          fontSize: '2rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '4rem',
        },
        fontWeight: '700',
        fontFamily: 'serif',
    };

    theme.typography.h6 = {
        fontSize: '1rem',
        '@media (min-width:600px)': {
          fontSize: '1rem',
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '1.4rem',
        },
        fontWeight: '400',
        lineHeight: '2rem',
        fontFamily: 'unset',
        opacity: 0.6
    };

    const Item = styled(Stack)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        borderRadius: 0,
        elevation:0,
        color: theme.palette.text.secondary,
        [theme.breakpoints.up('md')]: {
            paddingLeft: '50px' 
        }
        
      }));      

    return (
        <ThemeProvider theme={theme}>
        <Box backgroundColor='#5567ff' style={{marginTop: "70px"}}>
            <Box width={"70%"} mx={"auto"} py={5}>
                <Typography variant='h2' pt={8} color={theme.palette.white.main}>
                    Angular Fundamentals
                </Typography>
                <Typography variant='h6' maxWidth={700} color={theme.palette.white.main} >
                    It’s not every day that one of the most important front-end libraries in web development gets a complete overhaul. Keep your skills relevant and up-to-date with this comprehensive introduction to Google’s popular community project.
                </Typography>
                <Stack spacing={2} direction="row" mt={3} >
                    <Button variant="outlined" 
                        endIcon={<PlayCircleOutlineIcon color="white"/>}
                        color="white"
                        size='small'
                        >
                            <Typography variant='p' py={0.3} px={0.3}>
                                WATCH TRAILER
                            </Typography>
                    </Button>
                    <Button variant="contained" size='small' color='white'>
                        <Typography variant='p' py={0.3} px={0.3}>
                            START YOUR FREE TRIAL
                        </Typography>
                   </Button>
                </Stack>
            </Box>
        </Box>
        <Paper square elevation={3}>
            <Grid container spacing={2} >
                <Grid item xs={12} sm={8}>
                <Grid container >
                <Grid item xs={12} sm={4}>
                    <Item>
                        <Stack direction="row" spacing={2}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>
                            <Stack direction="column">
                                <Typography fontWeight={900} color="black">Eddie Bryan</Typography>
                                <Typography opacity={0.3}>Instructor</Typography> 
                            </Stack>
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Item>
                        <Stack direction="row" spacing={1} >
                            <AccessTimeIcon />
                            <Typography>2h 46m</Typography> 
                        </Stack>
                    </Item>
                </Grid>
                <Grid item xs={12} sm={2}>
                    <Item>
                        <Stack direction="row" spacing={1} >
                            <BarChartIcon backgroundColor="red"/>
                            <Typography>Beginner</Typography> 
                        </Stack>
                    </Item>
                </Grid>
                </Grid>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Item>
                    <Box><Rating name="read-only" value={4} readOnly/></Box>
                    <Typography>20 Ratings</Typography>
                </Item>
                </Grid>
            </Grid>
        </Paper>
        </ThemeProvider>
    );
};

export default CoursePreview;