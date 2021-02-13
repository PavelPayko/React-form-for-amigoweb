import React, {useState} from 'react';
import classes from './Dropdown.module.css'
import Trigger from './Trigger/Trigger';
import Menu from './Menu/Menu';

const Dropdown = props => {
    const [isActive, isActiveToggle] = useState(false)

    const isActiveToggleHandler = () => isActiveToggle(!isActive)

    const setValueHandler = e => {
        props.setValue(e)
        isActiveToggleHandler()
    }
    return (
        <div className={classes.dropdown}>
            <span className={classes.title}>{props.title}</span>
            <Trigger value={props.value}
                     placeholder={props.placeholder}
                     isActiveToggle={isActiveToggleHandler}
                     isActive={isActive}
            />
            <Menu setValueHandler={setValueHandler}
                  isActive={isActive}
                  menuItems={props.menuItems}
            />
        </div>
    )

}
export default Dropdown
