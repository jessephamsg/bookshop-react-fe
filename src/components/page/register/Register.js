import React, { Component } from 'react'
import axios from 'axios';
import RegisterLabels from './RegisterLabel'
import Navigation from '../../general/navigation/Navigation'

class RegisterContainer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            password2: '',
            registrationError: [],
        }
    }
    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({ [id]: value })
    }
    handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let data = { ...this.state }
            const response = await axios.post('http://localhost:4000/register', data)
            if (response.data.success) {
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    password2: ''
                })
                this.props.history.push('/login')
            }
        } catch (err) {
            const errors = err.response.data.error
            this.setState({
                registrationError: errors
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navigation />
                <form onSubmit={this.handleSubmit}>
                    <RegisterLabels
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </form>
            </React.Fragment>
        )
    }
}
export default RegisterContainer