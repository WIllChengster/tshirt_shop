import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';

import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import AddToCourtButton from './AddToCartButton'

const useStyles = makeStyles( theme => ({
    card: {
        // maxWidth: 300,
    },
    media: {
        height: 200,
        [theme.breakpoints.down('sm')]: {
            height: 100
        }
    },
    content: {
        [theme.breakpoints.down('sm')]: {
            height: 100
        }
    }
}));



const Item = (props) => {
    const classes = useStyles();
    const redirectToItem = () => {
        props.history.push(`/item/${props.shirtObj.id}`)
    }
    return(
            <Card className={classes.card} variant="outlined" >
                <CardActionArea>
                    <CardMedia className={classes.media} image={props.shirtObj.img}  />
                </CardActionArea>
                <CardContent className={classes.content} >
                    <Typography component="h3" >
                        {props.shirtObj.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, vel!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={redirectToItem} size="small" color="primary">Learn More</Button>
                    <AddToCourtButton item={props.shirtObj} ></AddToCourtButton>
                </CardActions>
            </Card>
    )
}

export default withRouter(Item);