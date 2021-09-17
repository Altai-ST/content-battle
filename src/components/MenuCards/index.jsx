import React from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';
import { useRouteMatch } from 'react-router';
import { CardItem } from '../CardItem';
import styless from './Menu.module.css';
import { BattleCard } from '../../container/BattleCard';
import {
        BrowserRouter as Router,
        Link,
        Switch,
        Route,
} from "react-router-dom";
import { Links } from '../Links';
import { BattleCardFilm } from '../../container/BattleCardFilm';
import { CardItem2 } from '../CardItem2';


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

export const MenuCards =()=>{
    const classes = useStyles()
    let { path, url } = useRouteMatch();
    console.log(path)
    return(
      <div className={classes.navBlock}>
      <Grid container direction="row" spacing={1}>
          <Grid item xs={12} sm={3}>
            <Links prov={url}/>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Link to={`${url}/Anime`} style={{textDecoration: 'none'}}>
              <Button variant="contained"  className={classes.btnC}>Anime</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Link to ={`${url}/Cinema`} style={{textDecoration: 'none'}}>
              <Button variant="contained"  className={classes.btnC}>Cinema</Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={3}>
              <Button variant="contained"  className={classes.btnC}>Comics</Button>
          </Grid>
      </Grid>
        <Switch>
        <Route path={`${path}/Cards`}>
          <div className={styless.all}>
            <CardItem provs = {url}/>
            <CardItem2 provs = {url}/>
          </div> 
        </Route>
        <Route path={`${path}/Anime`}>
            <CardItem provs = {url}/>
        </Route>
        <Route path={`${path}/Cinema`}>
            <CardItem2 provs = {url}/>
        </Route>
          <div className={styless.battle}>
            <Grid container > 
              <Route path={`${path}/CardItem`}>
                <BattleCard className={styless.play1}/>
              </Route>
              <Route path={`${path}/CardItem2`}>
                <BattleCardFilm className={styless.play1}/>
              </Route>
            </Grid>
        </div>
        
        </Switch>

     
      </div>
        
    )
}