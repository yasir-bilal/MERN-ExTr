import React, { useState, useEffect } from 'react';
// import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

// import Navbar from './components/Sidebar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/posts';
// import useStyles from './styles';
import './App.css'



const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  // const classes = useStyles();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (

    <div id="wrapper">
            <Sidebar/>
              <Posts setCurrentId={setCurrentId} />
            
            
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </div>

  );
};

export default App;
