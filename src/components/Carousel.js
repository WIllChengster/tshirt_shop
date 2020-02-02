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
        transition: '1s',
        transform: 'translateX(100%)',

    },
    
    incoming_item: {
        transform: 'translateX(0%)',
    }


}))

const Carousel = (props) => {
    const words = ['foo', 'bar', 'fuzz'];

    const classes = useStyles();
    const [slideIndex, switchSlide] = useState(0)



    return (
        <div className={classes.carousel}>
            <Paper className={ `${classes.carousel_item} ${classes.incoming_item} ` }>{words[slideIndex]}</Paper>
            {/* <Paper className={classes.carousel_item}>{words[slideIndex]}</Paper> */}
        </div>
    )
}

export default Carousel