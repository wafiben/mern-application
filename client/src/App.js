import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./components/regiterForm/RegisterForm.js";
import Home from "./components/Home/Home";
import UserProfile from "./components/UserProfile/UserProfile";
import React from "react";
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import PostForm from './components/PostForm/PostForm';
import  Posts from './components/Posts/Posts.js';
import useStyles from './styles';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {getPosts} from './redux/actions/PostActions/actions'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
function App() {
  const classes = useStyles();
  const dispatch=useDispatch();
 /*  useEffect(()=>{
   dispatch(getPosts())
  },[dispatch]) */

  return (

    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">home to be changed</Typography>
        <img className={classes.image} /* src={memories} */ alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts  />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PostForm  />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    
  );
}

export default App;
