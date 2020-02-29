
import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { formatPrice } from '../helpers/pricing'
import axios from 'axios'

import { Grid, Typography } from '@material-ui/core';
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
        axios.post('/api/shirts/exact_id', {id: props.match.params.id}).then(res => {
            setShirt(res.data)
            
        })
    }, [props.match.params.id])

    return(
        <Grid container spacing={2} >
            <Grid item xs={6} >
                <img className={classes.w100} src={shirt.img} alt="t-shirt"/>
            </Grid>
            <Grid item xs={6} className={classes.buyOptions} >
                <Typography variant="h4" >
                    {shirt.name}
                </Typography>
                <Typography varaint ="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex exercitationem eligendi enim magni? Amet, pariatur beatae nam assumenda accusamus, deserunt consequuntur provident eius, nisi deleniti tempore blanditiis sed debitis quis!
                </Typography>
                <Typography variant="h5" >
                    ${typeof(shirt.price) !== 'undefined'? formatPrice(shirt.price): ''}
                </Typography>
                <div>
                    <AddToCartButton variant="contained" size="large" color="primary" item={shirt} />
                </div>
            </Grid>
        </Grid>
    )
}

export default withRouter(ItemPage);