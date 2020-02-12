import React, { useEffect, useState} from 'react';

import { makeStyles } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Item from './Item'

import axios from 'axios';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',

    }
}));

const ItemGenerator = (props) => {

    const [shirts, setShirts] = useState([])

    useEffect( () => {
        axios.get('/api/shirts/all').then(res => {
            setShirts(res.data)
        })
    }, [shirts.length])

    
    const classes = useStyles();

    let ItemGenerator = shirts.map((item, index) => {
        return( 
            <Grid item key={`shirt ${index}`}>
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