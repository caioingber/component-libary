import React, { Component } from 'react'
import './Form.css'
// import Button from '../Buttons/Button'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
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
        if (types.includes(this.props.type)) {classList += ` form-${this.props.type}`}

        //Assigning size class
        if(this.props.medium) {classList += ` medium`}
        if(this.props.large) {classList += ` large`}

        //Determining background color
        if(this.props.outline) {classList += ` outline`}
        if(this.props.filled) {classList += ` filled`}
        
        //Conditional render for select forms
        if (this.props.select) {
            return (
            <form>
                <select className={classList}>
                        <option>{this.props.label}</option>
                </select>
            </form>
            )
        }

        if(this.props.count) {
            return (
                <div className={classList}>
                    <button>-</button><span>{this.state.count}</span><button>+</button>
                </div>
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