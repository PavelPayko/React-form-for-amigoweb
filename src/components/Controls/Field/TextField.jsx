import React from 'react'
import classes from './TextField.module.css'

const TextField = props => {

    return (
        <div className={classes.textField}>
            <label htmlFor={props.name} className={classes.label}>{props.title}</label>
            <input type={props.type}
                   name={props.name}
                   className={classes.input}
                   placeholder={props.placeholder}
                   value={props.value}
                   onChange={props.setValue}
                   onBlur={props.onBlur}
            />
            <span className={classes.error}>
                {props.errors[props.name] && props.touched[props.name] ? <div>{props.errors[props.name]}</div> : null}
            </span>
        </div>
    )
}

export default TextField