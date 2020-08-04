import React, { Component } from 'react'
import axios from 'axios'
import LoginLabel from './LoginLabel'
import Navigation from '../../general/navigation/Navigation'


class LoginContainer extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            loginError: [],
            successMsg: ''
        }
    }
    handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let data = { ...this.state }
            const response = await axios.post("http://localhost:4000/login", data)
            if (response.data.success) {
                this.props.history.push('/')
            }
        } catch (err) {
            const errors = err.response.data.error;
            this.setState({
                loginError: [errors]
            })
        }
    }
    handleChange = (e) => {
        const { value, id } = e.target
        this.setState({ [id]: value })
    }
    responseGoogle = async (response) => {
        try {
            const data = response.profileObj
            const token = response.tokenId
            const res = await axios.post("http://localhost:4000/login/google", data)
            if (res.data.success) {
                sessionStorage.setItem("userData", JSON.stringify(token))
                this.props.history.push('/')
            }
        } catch (err) {
            const errors = await err.response.data.error;
            this.setState({
                loginError: [errors]
            })
        }
    }
    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <LoginLabel
                        {...this.state}
                        handleChange={this.handleChange}
                        responseGoogle={this.responseGoogle}
                    />
                </form>
            </React.Fragment>

        )
    }
}

export default LoginContainer