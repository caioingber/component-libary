import React, { Component } from 'react'
import './Form.css'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increaseCount = () => {
        if(this.state.count < 10) {
            this.setState({ count: this.state.count + 1})
        }
    }

    decreaseCount = () => {
        if(this.state.count > 0) {
            this.setState({ count: this.state.count - 1})
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

        //Size for input w/ button
        if(this.props.buttonSmall) {classList += ` form-${this.props.type}-small`}
        if(this.props.buttonLarge) {classList += ` form-${this.props.type}-large`}
        
        //render for select input
        if (this.props.select) {
            return (
            <form>
                <select className={classList}>
                    <option>{this.props.label}</option>
                </select>
            </form>
            )
        }
        //Render number input
        if(this.props.count) {
            return (
                <div className={classList}>
                    <button onClick={this.decreaseCount}>-</button><span>{this.state.count}</span><button onClick={this.increaseCount}>+</button>
                </div>
            )
        }

        if(this.props.voucher) {
            return (
                <div className={classList}>
                    <input type={this.props.type} placeholder={placeholder}></input>
                    <button className='button-primary white-text'>{this.props.label}</button>
                </div>
            )
        }

        //render text input
        return (
        <form>
            <label className="input-label">{this.props.label}</label> <br></br>
            <input type={this.props.type} placeholder={placeholder} className={classList}></input>
        </form>
        )
    }

}

export default Form