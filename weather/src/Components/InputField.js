import React from 'react';
import { TextField, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

/* Using react hooks to apply styles */
const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
        margin: theme.spacing(1),
        width: "14ch"
        }
    }
}));

/* Using props to read in the data being entered */
const InputField = (props) => {
    const classes = useStyles();
    
    return (
    <Box className={classes.root} noValidate autoComplete="off">

        {/* The text fields for the weather search being the city and the country */}
        <TextField onChange={props.handleChange("city")} label="City" />
        <TextField onChange={props.handleChange("country")} label="Country" />
      
        {/* The button when clicked on the weather search will be performed */}
        <Button onClick={props.loadWeather} variant="contained" color="primary">
            Find Weather
        </Button>
    </Box>
  );
};

export default InputField;