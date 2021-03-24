import React from 'react'
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    primaryButton: {
        boxShadow: ' -4px -4px 10px rgba(0, 0, 0, 0.1)'
    }

}))

const SecondaryButton = ({
    label,
    ...rest
}) => {

    const classes = useStyles();


    return (
        <Button variant="contained" color="secondary" boxShadow={3} {...rest}>
            {label}
        </Button>
    );
}

export default SecondaryButton;