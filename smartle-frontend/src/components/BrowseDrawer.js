import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CodeIcon from '@mui/icons-material/Code';
import BrushIcon from '@mui/icons-material/Brush';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import AdbIcon from '@mui/icons-material/Adb';
import CourseCard from './CourseCard';


const drawerWidth = 240;

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

export default function ClippedDrawer(props) {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
    
      <Box component="main" sx={{ flexGrow: 1, p: 3}}>
        <Toolbar />
        <Toolbar />
        <CourseCard />
      </Box>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
        anchor="right"
        style={{zIndex: "1"}}
      >
          <Toolbar />
          <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <List>
                <Typography ml={2} mb={1}>CATEROGY</Typography>
                <ListItem button key={"Web Development"}>
                    <ListItemIcon>
                        <CodeIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Web Development"} />
                </ListItem>
                <ListItem button key={"Design"}>
                    <ListItemIcon>
                        <BrushIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Design"} />
                </ListItem>
                <ListItem button key={"iOS & Swift"}>
                    <ListItemIcon>
                        <PhoneIphoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={"iOS & Swift"} />
                </ListItem>
                <ListItem button key={"Andriod"}>
                    <ListItemIcon>
                        <AdbIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Andriod"} />
                </ListItem>
            </List>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </Box>
  );
}

