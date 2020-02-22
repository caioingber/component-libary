import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let classList = ''

        let placeholder = this.props.placeholder
        if (!placeholder) {
            placeholder = this.props.label
        }

        //Assigning class by input type
        let types = ['text', 'select', 'number', 'voucher', 'checkbox']
        if (types.includes(this.props.type)) {
            classList += ` input-${this.props.type}`
        }
        
        if (this.props.select) {
            return (
                <select></select>
            )
        }
        return (
        <form onSubmit={this.props.onSubmit}>
            <label className="input-label">{this.props.label}</label> <br></br>
            <input type={this.props.type} placeholder={placeholder} className={classList}></input>
        </form>
        )
    }

}

export default Form