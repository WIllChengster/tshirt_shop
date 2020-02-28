import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import countries from '../helpers/countries';

const useStyles = makeStyles({
    option: {
        fontSize: 15,
        '& > span': {
            marginRight: 10,
            fontSize: 18,
        },
    },
});

const CountrySelect = (props) => {
    const classes = useStyles();
    return (
        <Autocomplete
            id = {props.id}
            onChange = {(event,value) => props.changeMethod(value)}
            // onChange={(event, value) => console.log(value)}
            style={{ width: 150, display: 'inline-flex' }}
            options={countries}
            classes={{
                option: classes.option,
            }}
            autoHighlight
            getOptionLabel={option => option.label}
            //   renderOption={option => (
            //     <React.Fragment>
            //       <span>{countryToFlag(option.code)}</span>
            //       {option.label} ({option.code}) +{option.phone}
            //     </React.Fragment>
            //   )}
            renderInput={params => (
                <TextField
                    {...params}
                    label="Country"
                    //   variant="outlined"
                    fullWidth
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password',
                    }}
                    required
                />
            )}
        />
    );
}


export default CountrySelect