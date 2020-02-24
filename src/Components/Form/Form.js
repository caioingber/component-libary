import React, { Component } from 'react'
import './Form.css'

// Deployed link: https://app.netlify.com/sites/vigilant-mayer-c30ebd/overview

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            inputValue: "",
            checked: false
        }
    }
    //Number input functions
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

    //Text input functions
    changeValue = (e) => {
        e.preventDefault()
        this.setState({inputValue: e.target.value})
        console.log(e.target.value)
    }

    setCheck = (e) => {
        if (this.state.checked === false) {
            this.setState({checked: true})
        }
        else {
            this.setState({checked: false})
        }
    }

    render() {
        let classList = ''
        let checkList = ''

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
        
        //Change checkbox color
        if(this.props.check) {checkList += ` checkmark`}
        if(this.props.black) {checkList += ` black-check`}

        //render for select input
        if (this.props.select) {
            return (
            <form>
                <select className={classList} style={this.props.style}>
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

        //render text with button
        if(this.props.voucher) {
            return (
                <div className={classList}>
                    <input type={this.props.type} placeholder={placeholder} onChange={this.changeValue}></input>
                    <button className={'button-primary white-text'}>{this.props.label}</button>
                </div>
            )
        }

        //render checkboxes
        console.log(this.state.checked)
        if(this.props.check) {
            return (
                <label className={classList}>
                    <input type={this.props.type} className="checkmark" onClick={this.setCheck}></input>
                    <span className={checkList}><img src={this.props.pic}></img></span>
                    {this.props.label}
                </label>
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