import React from 'react';
import { useSelector } from 'react-redux';
import styless from './styles.module.css'
export const Title =(props)=>{
    const title = useSelector(state=> state.User.titleDataFilm)
    return(
        <>
            {
            title[props.number].map((e)=>{
                    console.log(e)
                    return <h2 className={styless.title}>{e}</h2>
            })
            }
        </>
    )
}