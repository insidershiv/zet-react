import { Button } from '@material-ui/core'
import React from 'react'


const ThemeButtonRound = ({
    bgColor, variant, value, handleClick, ...rest
}) => {
    return (
        <Button style={{ backgroundColor: bgColor, }} variant={variant} onClick={() => console.log('his')}>
            {value}
        </Button>
    )
}

export default ThemeButtonRound