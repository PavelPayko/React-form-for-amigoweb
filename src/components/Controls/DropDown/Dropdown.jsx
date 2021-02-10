import React, {useState} from 'react';
import classes from './Dropdown.module.css'
import Trigger from './Trigger/Trigger';
import Menu from './Menu/Menu';

const Dropdown = props => {
    const [isActive, isActiveToggle] = useState(false)

    const isActiveToggleHandler = () => isActiveToggle(!isActive)

    const setValueHandler = e => {
        let event = e
        event.target.value = e.target.innerText
        event.target.name = props.name
        props.setValue(event)
        isActiveToggleHandler()
    }
    return (
        <div className={classes.dropdown}>
            <span className={classes.title}>{props.title}</span>
            <Trigger value={props.value} placeholder={props.placeholder} isActiveToggle={isActiveToggleHandler}
                     isActive={isActive}/>
            <Menu setValueHandler={setValueHandler} isActive={isActive} menuItems={props.menuItems}/>
            <span className={classes.error}>
                {props.errors[props.name] && props.touched[props.name] ? <div>{props.errors[props.name]}</div> : null}
            </span>

        </div>
    )

}
export default Dropdown
