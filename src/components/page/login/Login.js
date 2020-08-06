//DEPENDENCIES
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

//COMPONENTS
import LoginLabel from './LoginLabel';
import Navigation from '../../general/navigation';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


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
            const response = await axios.post(`${REACT_APP_SERVER_URL}/login`, data)
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
            const res = await axios.post(`${REACT_APP_SERVER_URL}/login/google`, data)
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
                <Navigation history= {this.props.history}/>
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

export default withRouter(LoginContainer)