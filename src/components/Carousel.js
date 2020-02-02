import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { Paper } from '@material-ui/core'
import transitions from '@material-ui/core/styles/transitions';


const useStyles = makeStyles(theme => ({
    carousel: {
        display: 'flex',
        flexFlow: 'column wrap',
        overflow: 'hidden',
        width: "100%",
        height: '250px',
        border: '1px solid black',

    },

    carousel_item: {
        width: '100%',
        height: '100%',
        textAlign: 'center',
        transform: 'translateX(0%)',

    },

    exiting_item: {
        transition: '1s',
        transform: 'translateX(-100%);'
    },
    
    incoming_item: {
        transition: '1s',

        // transform: 'translateX(0%)',
    }


}))

const Carousel = (props) => {
    const words = ['foo', 'bar', 'fuzz'];

    const classes = useStyles();
    const [slideIndex, switchSlide] = useState(0)

    const [slide1Class, changeSlide1Class] = useState(classes.carousel_item)

    useEffect( () => {
        setTimeout( () => {
            changeSlide1Class(`${classes.carousel_item} ${classes.exiting_item}`)
        }, 1000 )
    } )

    



    return (
        <div className={classes.carousel}>
            <Paper className={ slide1Class }>{words[slideIndex]}</Paper>
            {/* <Paper className={classes.carousel_item}>{words[slideIndex]}</Paper> */}
        </div>
    )
}

export default Carousel