import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { AddUser } from '../../redux/action';
import { Redirect } from 'react-router';
import {
  BrowserRouter as Router,
  Link as LinkRout,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { CheckUser } from '../../redux/action';
import {Login} from './Valid/ValidCSS'
import { reduxForm, Field } from 'redux-form';
import { required, maxLengthPass, maxLengthEmail } from '../SingUpFunc/Valid/index';

const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%', 
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));



const SingInFunc =(props)=>{
    const classes = useStyles();
    return(
        <form 
            className={classes.form} 
            onSubmit={props.handleSubmit}
         >
          <Field
            name='Email' 
            component={Login}
            placeholder='Email'
            validate = {[required, maxLengthEmail]}
          />
          <Field
            name='Password' 
            component={Login}
            placeholder='Password'
            validate = {[required, maxLengthPass]}
            type='password'
          />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                disabled={props.pristine || props.submitting}
              >
                Sign In
              </Button>
          <Grid container>
            <Grid item>
                <LinkRout to='/Reg'>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link></LinkRout>
            </Grid>
          </Grid>
        </form>
    )
}

const SingInFuncRed = reduxForm({form: 'SingIn'})(SingInFunc)


export const LoginIn = ()=>{
    const dispatch = useDispatch()
    const chek = useSelector(state => state.User.chekingUser)
    
    if(localStorage.getItem('users') !== null){
      dispatch(AddUser(JSON.parse(localStorage.getItem('users'))))
    }else{
      return []
    }
    // const st = useSelector(state => state.User.users)
    // console.log(st)
    if (chek === true){
        return <Redirect to ='/Lead'/>
      }  
    const onSubmit = (formData)=>{
        console.log(formData)
        dispatch(CheckUser(formData))
        
        console.log(chek)
          
    }

    

    return(
        <div>
            <h1>Login</h1>
            <SingInFuncRed onSubmit={onSubmit}/>
        </div>
    )
}