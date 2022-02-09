import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Adobe from "../assets/xd.png";
import Newsletter from "../assets/newsletter.png";
import Craft from "../assets/craft.jpeg";
import In from "../assets/Invision.jpeg";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';  

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function CourseCard() {
    const courses = {
        name: ["Adobe Xd","Newsletter Design", "inVision App","Craft by inVision" ],
        src: [Adobe, Newsletter, In, Craft]
    };
  return (
      <div>
        <Grid container spacing={2} px={8}>
            <h3 style={{ width: "100%", borderBottom: "1px solid #000",lineHeight: "0.1em", margin: "10px 0 20px" }}>
            <span style={{background:"#fff", padding: "0 10px", textAlign: "left" }}>POPULAR COURSES</span></h3>
        </Grid>
        <Grid container spacing={2} px={8} textAlign={"center"}>
        <Grid item xs={12}  md={6} lg={3}>
        <Card sx={{ maxWidth: 500 }} style={{marginRight: "20px"}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                src={courses.src[0]}
                alt="green iguana"
                />
                <CardContent style={{textAlign: "center" , marginBottom: "-20px", marginTop: "-10px"}}>
                <Typography gutterBottom variant="h6" component="div">
                    {courses.name[0]}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Card sx={{ maxWidth: 500 }} style={{marginRight: "20px"}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                src={courses.src[1]}
                alt="green iguana"
                />
                <CardContent style={{textAlign: "center" , marginBottom: "-20px", marginTop: "-10px"}}>
                <Typography gutterBottom variant="h6" component="div">
                    {courses.name[1]}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Card sx={{ maxWidth: 500 }} style={{marginRight: "20px"}}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                src={courses.src[2]}
                alt="green iguana"
                />
                <CardContent style={{textAlign: "center" , marginBottom: "-20px", marginTop: "-10px"}}>
                <Typography gutterBottom variant="h6" component="div">
                    {courses.name[2]}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={3}>
        <Card sx={{ maxWidth: 500 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                src={courses.src[3]}
                alt="green iguana"
                />
                <CardContent style={{textAlign: "center" , marginBottom: "-20px", marginTop: "-10px"}}>
                <Typography gutterBottom variant="h6" component="div">
                    {courses.name[3]}
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    </Grid>
      </div>
    
  );
}
