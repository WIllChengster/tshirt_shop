import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
// import transitions from '@material-ui/core/styles/transitions';


const useStyles = makeStyles(theme => ({
    carousel: {
        position: 'relative',
        overflow: 'hidden',
        width: "100%",
        height: '250px',
        border: '1px solid black',

    },

    carousel_item: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transition: '1s',
        top: 0,
        bottom:0,
        right:0,
        left:0,
        

    },

    exiting_item: {

        transform: 'translateX(-100%);'
    },
    
    incoming_item: {

        transform: 'translateX(0%)',
    },

    awaiting_item: {
        transform: 'translateX(100%)'
    }


}))

const Carousel = (props) => {
    const words = ['foo', 'bar', 'fuzz'];

    const classes = useStyles();
    const [slideIndex, switchSlide] = useState(0)

    const [slide1Class, changeSlide1Class] = useState(classes.carousel_item)
    const [slide2Class, changeSlide2Class] = useState(`${classes.carousel_item} ${classes.awaiting_item}`)
    useEffect( () => {
        setTimeout( () => { 
            changeSlide1Class(`${classes.carousel_item} ${classes.exiting_item}`)
            changeSlide2Class(`${classes.carousel_item} ${classes.incoming_item}`)
        }, 3000 )



    } )

    



    return (
        <div className={classes.carousel}>
            <Paper className={ slide1Class }> foo </Paper>
            <Paper className={ slide2Class }> bar </Paper>
        </div>
    )
}

export default Carousel