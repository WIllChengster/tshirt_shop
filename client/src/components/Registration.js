import React, { useState } from 'react';
import { TextField, Paper, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3),
        margin: 'auto',
        [theme.breakpoints.up('xs')]: {
            width: '70%',

        }
    },
    title: {
        textAlign: 'center'
    },
    inputContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            padding: theme.spacing(2),
        }
    }
}))


const Registration = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        confirm_password: '',
        fname: '',
        lname: '',
    })

    const handleChange = (event) => {
        setInputs({
            ...inputs,
            [event.target.id]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    const classes = useStyles();
    return (
        <Paper className={classes.root} >
            <Typography className={classes.title} variant="h4">Create an Account</Typography>
            <form onSubmit={handleSubmit}className={classes.inputContainer} >
                <TextField id="fname" label="First Name" type="text" value={inputs.fname} onChange={handleChange}/>
                <TextField id="lname" label="Last Name" type="text" value={inputs.lname} onChange={handleChange}/>
                <TextField id="email" label="Email" type="email" value={inputs.email} onChange={handleChange}></TextField>
                <TextField id="password" label="Desired Password" type="password" value={inputs.password} onChange={handleChange}/>
                <TextField id="confirm_password" label="Confirm Password" type="password" value={inputs.confirm_password} onChange={handleChange}/>
                <Button variant="contained" >Create Account</Button>
            </form>
        </Paper>
    )
}

export default Registration
