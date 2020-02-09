import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Item from './Item'

import tshirtData from '../itemData'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

const ItemGenerator = (props) => {
    
    const classes = useStyles();

    let ItemGenerator = tshirtData.map((item, index) => {
        return( 
            <Grid item xs={3} key={`shirt ${index}`}>
                <Item shirtObj={item} />
            </Grid>
        )
    })

    return(
            <Grid container spacing={2} className={classes.root} >
                {ItemGenerator}

            </Grid>
    )
}

export default ItemGenerator