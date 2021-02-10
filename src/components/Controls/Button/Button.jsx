import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <div>
            <button disabled={props.disabled} className={classes.btn}>{props.title}</button>
        </div>
    )
}
export default Button