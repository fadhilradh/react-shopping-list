import React, { Component} from 'react'

class Form extends Component {
    initialState = {
        item: '',
        quantity: '',
    }

    state = this.initialState

    handleChange = (event) => {
        const {name, value} = event.target

        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {item, quantity} = this.state;
        const labelStyle = {
         color: '#0366EE'
        };

        const formStyle = {
            border: '1px solid #0366EE',
            borderRadius: '8px',
            padding: '20px',
            width:'50%'
        }
        return (
            <div>
            <h4>Add Item</h4>
            <form style={formStyle}>
                <label style={labelStyle} htmlFor="item">Item</label>
                <input  
                    type="text"
                    name="item"
                    id="item"
                    value={item}
                    onChange={this.handleChange}
                />
                <label style={labelStyle} htmlFor="quantity">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    id="quantity"
                    value={quantity}
                    onChange={this.handleChange}
                />
                <input type="button" value="Submit" onClick={this.submitForm}/>
            </form>
            </div>
           
        )
    }
}

export default Form