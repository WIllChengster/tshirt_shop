import React from 'react';
import tshirt1 from '../assets/imgs/tshirt.jpeg';
import troopershirt from '../assets/imgs/trooper-tshirt.jpg';

import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid } from '@material-ui/core'
import Item from './Item'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    }
}));

const ItemGenerator = (props) => {
    
    const classes = useStyles();
    const tshirtData = [
        {
            name: 'default tshirt',
            img: tshirt1,
        },
        {
            name: 'trooper tshirt',
            img: troopershirt
        }
    ]


    let ItemGenerator = tshirtData.map((item, index) => {
        return( 
            <Grid item xs={3} key={index}>
                <Item shirtObj={item} />
            </Grid>
        )
    })

    return(
        <Container>
            <Grid container spacing={2} className={classes.root} >
                {ItemGenerator}

            </Grid>

        </Container>
    )
}

export default ItemGenerator