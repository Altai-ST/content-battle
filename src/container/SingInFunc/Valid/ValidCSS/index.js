
import { TextField } from '@material-ui/core'
import React from 'react'
import styles from './validFormIn.module.css'


export const Login = ({input, meta, ...props})=>{
    const hasError = meta.touched && meta.error
    return(
        <div className={styles.formControl + ' '+ (hasError ? styles.error : '')}>
            <TextField
                variant="outlined"
                margin="normal"
                fullWidth
                label={props.name}
                {...input}
                {...props}
            />
            { hasError && <span className={styles.errors}>{meta.error}</span>}
        </div>
    )
}