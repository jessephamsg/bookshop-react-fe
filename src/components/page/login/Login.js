//DEPENDENCIES
import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';

//COMPONENTS
import LoginLabel from './LoginLabel';
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;

class LoginContainer extends Component {

    constructor() {
        super()
        this.state = {
            email: null,
            password: '',
            loginError: [],
            successMsg: '',
            userName: null
        }
    }

    async componentDidMount() {
        try {
          const data = JSON.parse(sessionStorage.getItem('userData'));
          const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
          console.log(response)
          if (data) {
            const res = await axios.post(`${REACT_APP_SERVER_URL}/googleauth`, data)
            console.log(res.data.data.email)
            this.setState({
              userName: res.data.data.name,
            })
          }
          else if (response.data)
            this.setState({
              userName: response.data.name,
            })
        } catch (err) {
          console.log(err.response)
          console.log(err.res)
        }
      }
    

    handleSubmit = async (e) => {
        try {
            e.preventDefault()
            let data = { ...this.state }
            const response = await axios.post(`${REACT_APP_SERVER_URL}/login`, data,  { withCredentials: true })
            if (response.data.success) {
                this.setState({ userName : response.data.email })
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
                const data = await JSON.parse(sessionStorage.getItem('userData'));
                this.setState({ userName : data })
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
                <Icons userName={this.state.userName} />
                <form onSubmit={this.handleSubmit}>
                    <LoginLabel
                        {...this.state}
                        handleChange={this.handleChange}
                        responseGoogle={this.responseGoogle}
                    />
                </form>
                <Footer />
            </React.Fragment>

        )
    }
}

export default withRouter(LoginContainer)