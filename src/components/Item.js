import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import tshirt from '../assets/imgs/tshirt.jpeg'

const useStyles = makeStyles( theme => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 200
    }
}));

const Item = () => {
    const classes = useStyles();
    return(
            <Card className={classes.card}>
                <CardActionArea>
                    <CardMedia className={classes.media} image={tshirt}  />
                </CardActionArea>
                <CardContent>
                    <Typography component="h3" >
                        Tshirt
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, vel!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary">Learn More</Button>
                    <Button size="small" color="primary">Add to Cart</Button>
                </CardActions>
            </Card>
    )
}

export default Item