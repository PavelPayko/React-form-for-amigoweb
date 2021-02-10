import React from 'react'
import classes from './Trigger.module.css'

const Trigger = props => {
    return (
        <div className={classes.trigger + (props.isActive ? ` ${classes.focus}` : '')} onClick={props.isActiveToggle}>
            <input type='text'
                   className={classes.title}
                   placeholder={props.placeholder}
                   value={props.value}
                   disabled
            />
            <div>
                <svg width="16" height="9" viewBox="0 0 16 9" fill="#0880AE" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6.58579L14.2929 0.292893C14.6834 -0.0976311 15.3166 -0.0976311 15.7071 0.292893C16.0976 0.683418 16.0976 1.31658 15.7071 1.70711L8.70711 8.70711C8.31658 9.09763 7.68342 9.09763 7.29289 8.70711L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683418 0.292893 0.292893C0.683418 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L8 6.58579Z" />
                </svg>
            </div>

        </div>
    )
}
export default Trigger