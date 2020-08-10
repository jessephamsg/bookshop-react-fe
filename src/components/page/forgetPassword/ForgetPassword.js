//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import styles from './styles.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';
import ForgetPasswordLabel from './ForgetPasswordLabel';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


class ForgetPassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      successChange: null,
      failureChange: null,
      email: '',
    }
  }

  handleLogout = async (e) => {
    try {
      const response = await axios.get(`${REACT_APP_SERVER_URL}/logout`, { withCredentials: true })
      sessionStorage.removeItem('userData');
      this.props.history.push('/login')
    } catch (err) {
      console.log(err)
    }
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { ...this.state }
      const response = await axios.post(`${REACT_APP_SERVER_URL}/verifyuseremail`, data)
      console.log(response.data)
      if(!response.data.success) this.setState({ failureChange: [response.data.error] })
      if(response.data.success) this.setState({ successChange: [response.data.message] })
    } catch (err) {
      console.log(err)
    }
  }

  handleChange = (e) => {
    const { value, id } = e.target
    this.setState({ [id]: value })
  }

  render() {
    return (
      <React.Fragment>
        <Icons handleLogout={this.handleLogout}/>
        <div className={styles.wrapper}>
          <form onSubmit={this.handleSubmit}>
            <ForgetPasswordLabel {...this.state} handleChange={this.handleChange}/>
          </form>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default withRouter(ForgetPassword);