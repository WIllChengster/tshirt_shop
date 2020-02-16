import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { formatPrice } from '../helpers/pricing';

import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import AddToCourtButton from './AddToCartButton'

const useStyles = makeStyles( theme => ({
    card: {
        minWidth: 200,
    },
    media: {
        height: 200,
        [theme.breakpoints.down('sm')]: {
            height: 200
        }
    },
    content: {
        [theme.breakpoints.down('sm')]: {
            height: 50
        }
    },
    rightAlign: {
        textAlign: 'end'
    }
}));



const Item = (props) => {
    const classes = useStyles();
    const redirectToItem = () => {
        props.history.push(`/item/${props.shirtObj.shirt_id}`)
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
                    <Typography variant="body2"component="p" >
                        ${formatPrice(props.shirtObj.price)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button onClick={redirectToItem} size="small" color="primary">Learn More</Button>
                    <AddToCourtButton size="small" color="primary" item={props.shirtObj} ></AddToCourtButton>
                </CardActions>
            </Card>
    )
}

export default withRouter(Item);