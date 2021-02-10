import React from 'react'
import classes from './MenuItem.module.css'

const MenuItem = props => {
    return (
        <div className={classes.menuItem}>
            <input type="radio" name='option' id={props.id} className={classes.radio}  value={props.label}/>
            <label htmlFor={props.id} className={classes.label} onClick={props.setValueHandler}>{props.label}</label>
        </div>
    )
}

export default MenuItem