import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';


const useStyles = makeStyles((theme) => ({
    btnC: {
      backgroundColor: 'black',
      color: 'yellow'
    },
}));

export const Links =(props)=>{
    const classes = useStyles()
    return(
        <Link to={`${props.prov}/Cards`} style={{textDecoration: 'none'}}>
            <Button variant="contained" className={classes.btnC}>All</Button>
    </Link>
    )
    
}