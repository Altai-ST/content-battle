import React from 'react';
import { Grid } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import styless from './style.module.css'
import { Title } from './indexTitle';
import { NewBattle } from '../../redux/action';
import { useParams } from 'react-router';

export const BattleCard =()=>{
    let { topicId } = useParams();
    const pics = useSelector(state => state.User.picDataAnime)
    const dispatch = useDispatch()
    const number = useSelector(state => state.User.i)
    console.log(number)
    return(
        <div >
        <div className={styless.cards}>
            <Title className={styless.cardText} number={number} />
        </div>
        <div className={styless.cardsPic}>
            {pics[number].map((el)=>{
            return(
                <Grid item xs={12} sm={6} className={styless.pice}>
                    <Grid className={styless.picture} >
                        <img src={el} alt="" width='100%' className={styless.imgg} onClick={()=>dispatch(NewBattle())}/>
                    </Grid>
                </Grid> ) 
        })}
        </div>
        
        </div>
    )
}
