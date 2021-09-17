import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router';
import styless from './leading.module.css'
import {
        BrowserRouter as Router,
        Link,
        Switch,
        Route,
} from "react-router-dom";
import { BattleCard } from '../../container/BattleCard';
import { MenuCards } from '../MenuCards';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { CheckUser, CHECK_USER } from '../../redux/action';
import { AddUser } from '../../redux/action';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: 'yellow'
  },

  Nav:{
    backgroundColor: 'black',
    color: 'yellow',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color:'yellow'
  },
  title: {
    flexGrow: 1,
  },
  btn: {
    backgroundColor: 'yellow',
    color: 'black'
  },
  btnC: {
    backgroundColor: 'black',
    color: 'yellow'
  },
  navBlock:{
    marginTop: 20,
    backgroundColor: 'yellow'
  },
  media: {
    height: 140,
  },
  card:{
    maxWidth: 340,
    marginTop: 40,
    marginLeft: 50,
  }
}));

export const Leading =()=>{
  const classes = useStyles();
  const logout = useSelector(state => state.User.chekingUser)
  const dispatch = useDispatch()

  const funcLogOut =()=>{
    dispatch(AddUser(JSON.parse(localStorage.getItem('users'))))
    return dispatch(CheckUser({Email: 'fail', Password: 'fail'}))
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.Nav}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="primary" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Content battle
          </Typography>
          <Link to='/' style={{textDecoration: 'none'}} onClick={()=> funcLogOut()}>
            <Button variant="contained" className={classes.btn}>Log Out</Button>
          </Link>
        </Toolbar>
      </AppBar>
      <MenuCards/>
    </div>
  );
}