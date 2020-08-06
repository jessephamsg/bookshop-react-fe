import React, { Component } from 'react';
import axios from 'axios';
import Navigation from '../../general/navigation/Navigation';
import LoadingScreen from 'react-loading-screen';
import { withRouter } from "react-router-dom";
import ChangePasswordLabel from './ChangePasswordLabel';
import ProfileMenu from '../userProfile/ProfileMenu';
import styles from './styles.module.css';

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000' || 'https://bookshop-dev-be.herokuapp.com'


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
          <LoadingScreen
            loading={true}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            text='Here an introduction sentence (Optional)'
          >
          </LoadingScreen>
        </div>
      )
    }
    return (
      <React.Fragment>
        <Navigation />
        <div className={styles.wrapper}>
        <ProfileMenu localUser={this.state.localUser}/>
        <form onSubmit={this.handleSubmit}>
        <ChangePasswordLabel {...this.state} handleChange={this.handleChange}/>
        </form>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(ChangePassword);