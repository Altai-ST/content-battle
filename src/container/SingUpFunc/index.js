import { Button, Grid } from '@material-ui/core';
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { makeStyles } from '@material-ui/core/styles';
import { required, maxLengthPass, maxLengthName, maxLengthEmail } from './Valid/index';
import { Input } from './Valid/ValidCss';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    form: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
}));

const SingUpFunc =(props)=>{
    console.log('reere')
    const classes = useStyles()
    return(
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <Field
                        name='FirstName' 
                        component={Input}
                        placeholder='FirstName'
                        validate={[required, maxLengthName]}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field
                        name='LastName' 
                        component={Input}
                        placeholder='LastName'
                        validate={[required, maxLengthName]}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Field  
                        name='Email' 
                        component={Input}
                        placeholder='Email'
                        validate={[required, maxLengthEmail]}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Field 
                        placeholder='Password' 
                        name='password' 
                        component={Input}
                        validate={[required, maxLengthPass]}
                        type='password'
                    />
                </Grid>

                <Grid item xs={12}>
                    <Button
                        type='Submit'
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={props.pristine || props.submitting}
                    >
                        Sing Up
                    </Button> 
                </Grid>
            </Grid>
        </form>
    )
}


const SingUpFuncRed = reduxForm({form: 'login'})(SingUpFunc)


export const LoginIn = ()=>{
    let save = []
    const history = useHistory()
    if(localStorage.getItem('users') == null){
        return []
    }else{
        save = JSON.parse(localStorage.getItem('users'))
    } 
    const onSubmit = (formData)=>{
        save.push(formData)
        localStorage.setItem('users', JSON.stringify(save));
        if(localStorage.getItem('users') == null){
            return localStorage.setItem('users', formData)
        }else{
            save = JSON.parse(localStorage.getItem('users'))
        } 
        console.log(save)
        history.push('/')
        // dispatch(AddUser(formData))
    }

    return(
        <div>
            <h1>Login</h1>
            <SingUpFuncRed onSubmit={onSubmit}/>
        </div>
    )
}


