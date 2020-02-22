import React, { Component } from 'react'
import './Form.css'
import Button from '../Buttons/Button'

class Form extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        let classList = ''

        //Looking for placeholder text
        let placeholder = this.props.placeholder
        if (!placeholder) {
            placeholder = this.props.label
        }

        //Assigning class by input type
        let types = ['text', 'select', 'number', 'voucher', 'checkbox']
        if (types.includes(this.props.type)) {
            classList += ` form-${this.props.type}`
        }

        if(this.props.medium) {classList += ` medium`}
        
        //Conditional render for select forms
        if (this.props.select) {
            return (
            <form className={classList}>
                <select >
                        <option>{this.props.label}</option>
                </select>
            </form>
            )
        }
        return (
        <form onSubmit={this.props.onSubmit} className={classList}>
            <label className="input-label">{this.props.label}</label> <br></br>
            <input type={this.props.type} placeholder={placeholder} ></input>
        </form>
        )
    }

}

export default Form