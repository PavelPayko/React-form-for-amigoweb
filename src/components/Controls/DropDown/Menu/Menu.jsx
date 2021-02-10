import React from 'react'
import classes from './Menu.module.css'
import MenuItem from './MenuItem/MenuItem';

const Menu = props => {
    let items = props.menuItems.map(item => (
        <MenuItem key={item.id} label={item} setValueHandler={props.setValueHandler} />
    ))
    return (
        <div className={classes.menu + ' ' + (props.isActive ? classes.active : '')}>
            { props.isActive && items}
        </div>
    )
}

export default Menu