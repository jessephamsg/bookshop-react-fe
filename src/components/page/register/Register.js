//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

//COMPONENTS
import RegisterLabels from './RegisterLabel';
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


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
        const { value, id } = e.target;
        this.setState({ [id]: value });
    }
    handleSubmit = async (e) => {
        try {
            e.preventDefault();
            let data = { ...this.state }
            const response = await axios.post(`${REACT_APP_SERVER_URL}/register`, data);
            if (response.data.success) {
                this.setState({
                    name: '',
                    email: '',
                    password: '',
                    password2: ''
                })
                this.props.history.push('/login');
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
                <Navigation history= {this.props.history}/>
                <form onSubmit={this.handleSubmit}>
                    <RegisterLabels
                        {...this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                    />
                </form>
                <Footer />
            </React.Fragment>
        )
    }
}
export default withRouter(RegisterContainer)