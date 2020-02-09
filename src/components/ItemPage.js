
import React, { useState, useEffect } from 'react';
import itemData from '../itemData';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Button } from '@material-ui/core';
import AddToCartButton from './AddToCartButton'

const useStyles = makeStyles((theme) => ({
    w100: {
        width: '100%'
    },
    buyOptions: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    }

}))

const ItemPage = (props) => {
    const [shirt, setShirt] = useState({});
    const classes = useStyles();

    useEffect( () => {
        getShirtData();
    })
    
    const getShirtData = () => {
        for(let item of itemData){
            if(item.id === Number(props.match.params.id)){
                setShirt(item);
            }
        }
    }

    return(
        <Grid container >
            <Grid item xs={6} >
                <img className={classes.w100} src={shirt.img} alt="t-shirt">
                </img>
            </Grid>
            <Grid item xs={6} className={classes.buyOptions} >
                <Typography variant="h4" >
                    {shirt.name}
                </Typography>
                <div>
                    <AddToCartButton variant="contained" size="large" color="primary" item={shirt} />
                </div>
            </Grid>
        </Grid>
    )
}

export default withRouter(ItemPage);