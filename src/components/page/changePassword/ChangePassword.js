//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';
import { withRouter } from "react-router-dom";
import styles from './styles.module.css';

//COMPONENTS
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';
import ChangePasswordLabel from './ChangePasswordLabel';
import ProfileMenu from '../userProfile/ProfileMenu';
import LoadingPage from '../../general/loadingPage';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


class ChangePassword extends Component {
  constructor() {
    super()
    this.state = {
      id: null,
      googleUser: false,
      localUser: false,
      successChange: null,
      failureChange: null,
      password1: '',
      password2: '',
      currentPassword: ''
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
          id: res.data.data.id,
          googleUser: true,
        })
      }
      else if (response.data)
        this.setState({
          id: response.data._id,
          localUser: true,
        })
    } catch (err) {
      console.log(err.response)
      console.log(err.res)
    }
  }

  handleChange = (e) => {
    const { value, id } = e.target
    this.setState({ [id]: value })
  }

  render() {
    if (this.state.id === null) {
      return (
        <div>
          <LoadingPage />
        </div>
      )
    }
    return (
      <React.Fragment>
        <Navigation history = {this.props.history}/>
        <div className={styles.wrapper}>
        <ProfileMenu localUser={this.state.localUser}/>
        <form onSubmit={this.handleSubmit}>
        <ChangePasswordLabel {...this.state} handleChange={this.handleChange}/>
        </form>
        </div>
        <Footer/>
      </React.Fragment>
    )
  }
}

export default withRouter(ChangePassword);