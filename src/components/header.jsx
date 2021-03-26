import React, { useEffect, useState } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Tab, Tabs, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom'
import SecondaryButton from './form-elements/theme-buttonround';



export default function Header() {

    const useStyles = makeStyles((theme) => ({
        tab: {

            color: 'rgba(0,0,0,.5)',
            textTransform: 'none',
            minWidth: 10
        },
        tabContainer: {
            marginLeft: 'auto'
        }


    }));

    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const [value, setValue] = useState(0);
    const handleChange = (event, value) => {

        setValue(value);
    }

    return (



        <AppBar color="transparent" style={{ marginBottom: '5rem', backgroundColor: 'rgba(255, 255, 255, 0.8)' }} elevation={0}>
            <Toolbar>

                <SecondaryButton label="Zetone" style={{ marginLeft: '10rem' }} />


                <Tabs value={value} onChange={handleChange} indicatorColor="primary" className={classes.tabContainer}>
                    <Tab label="Home" component={Link} to="/" className={classes.tab} disableRipple />
                    <Tab label="About Us" component={Link} to="/about" className={classes.tab} disableRipple />
                    <Tab label="Fees" component={Link} to="/fees" className={classes.tab} disableRipple />
                    <Tab label="Course Structure" component={Link} to="/course" className={classes.tab} disableRipple />
                    <Tab label="FAQ" component={Link} to="/faq" className={classes.tab} disableRipple />
                    <Tab label="Apply Now" component={Link} to="/faq" className={classes.tab} disableRipple />

                </Tabs>
            </Toolbar>

        </AppBar>










    )
}
