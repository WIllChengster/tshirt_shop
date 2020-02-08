
import React, { useState, useEffect } from 'react';
import itemData from '../itemData';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { Grid, Typography, Button } from '@material-ui/core';

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
            if(item.id = props.match.params.id){
                setShirt(item);
            }
        }
    }

    console.log(shirt);
    return(
        <Grid container >
            <Grid item xs={6} >
                <img className={classes.w100} src={shirt.img} >
                </img>
            </Grid>
            <Grid item xs={6} className={classes.buyOptions} >
                <Typography variant="h4" >
                    {shirt.name}
                </Typography>
                <div>
                    <Button variant="contained" color="primary" size="large" >Add to Cart</Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default withRouter(ItemPage);