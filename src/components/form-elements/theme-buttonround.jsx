import React from 'react'
import { Button, makeStyles } from '@material-ui/core';
import { spacing } from '@material-ui/system';

const useStyles = makeStyles(theme => ({

    secondaryButton: {
        paddingLeft: '1.9rem',
        paddingRight: '1.9rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
    }

}))

const SecondaryButton = ({
    label,
    ...rest
}) => {

    const classes = useStyles();



    return (
        <Button variant="contained" color="secondary" className={classes.secondaryButton} {...rest}>
            {label}
        </Button>
    );
}

export default SecondaryButton;