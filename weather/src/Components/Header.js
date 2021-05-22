import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import "../CSS/Header.css"

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2)
    }
}));

export default function DenseAppBar() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar class="navbar" position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb6jQJ5EolfN4lLrTlzNxFNytZlkfILOqa6A&usqp=CAU" className="App-logo" alt="logo" />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Weather Application
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );

}