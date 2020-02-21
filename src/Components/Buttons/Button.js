import React from 'react'
import './Button.css'

const Button = (props) => {
    let classList = ''

    let types = ['primary', 'danger', 'success', 'warning', 'default']

    if (types.includes(props.type)) {
        classList += ` button-${props.type}`
    }
    //white font
    if (props.white) {
        classList += ` white-text`
    }
    //hover
    if(props.hover) {
        if (!props.type) {
            classList += ` button-default`
        }
        else {classList += ` button-${props.type}-hover`}
    }
    //faded background
    if(props.fade) {
        if(!props.type) {
            classList += ` button-default-faded no-border`
        } else {
        classList += ` button-${props.type}-faded no-border`
    }
    }
    //white backgorund
    if (props.outline) {
        classList += ` button-outline`
    }
    //large
    if(props.large) {
        classList += ` button-large`
    }

    if (props.icon) {
        return <button onClick={props.onClick} className={classList}><img src={props.icon}></img>{props.label}</button>
    }
    return<button onClick={props.onClick} className={classList}>{props.label}</button>
}

export default Button