import React from 'react';
import { makeStyles} from '@material-ui/core/styles';

import imgs from '../../images/film1.jpg'
import Typography from '@material-ui/core/Typography';
import { Card } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CardActionArea } from '@material-ui/core';
import { CardMedia } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import cardStyles from './cards2.module.css'

const useStyles = makeStyles((theme) => ({
    media: {
      height: 140,
    },
    card:{
      maxWidth: 340,
      marginTop: 40,
      marginLeft: 50,
    }
  }));


 export const CardItem2 = (props)=>{
    const classes = useStyles()

    console.log(props.provs)
      return(
        <div>
        <Card className={classes.card}>
         <Link to={`${props.provs}/CardItem2`}>
        <CardActionArea>
          <CardMedia
            component='img'
            className={classes.media}
            image={imgs}
          />
          <CardContent className={cardStyles.text}>
            <Typography gutterBottom variant="h5" component="h2">
              Топ фильмы из 16
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Тут собраны лучшие фильмы, вы можете выбрать свой любимый тайтл путем голосований
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
      
      </div>
      )
  }