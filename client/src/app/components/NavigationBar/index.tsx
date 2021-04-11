import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// 
    const NavigationBar = (): JSX.Element => {
      return (
        <AppBar position="static" className="nav-bar">
          <Toolbar>
            <Typography variant="h3">Zlett</Typography>
          </Toolbar>
        </AppBar>
      );
    };

export default NavigationBar;
