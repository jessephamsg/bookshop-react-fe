//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';
import { withRouter } from "react-router-dom";
import styles from './styles.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';
import UserProfileLabel from './UserProfileLabel';
import Message from '../../general/errorMessage/ErrorMessage'
import ProfileMenu from './ProfileMenu';
import LoadingPage from '../../general/loadingPage';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


class UserProfile extends Component {
  constructor() {
    super()
    this.state = {
      userData: null,
      id: '',
      name: '',
      email: '',
      googleUser: false,
      localUser: false,
      successChange: null,
      failureChange: null,
      userAuthenticated: null
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
          name: res.data.data.name,
          email: res.data.data.email,
          googleUser: true,
          userData: res.data.data
        })
      }
      else if (response.data)
        this.setState({
          id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          localUser: true,
          userData: response.data
        })
        else {
          this.setState({ userAuthenticated: `Please Login to have access to User Profile`})
        }
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
    return (
      <React.Fragment>
        <Icons />
        {this.state.userAuthenticated == null ? 
        <div className={styles.wrapper}>
        <ProfileMenu localUser={this.state.localUser}/>
        <form onSubmit={this.handleSubmit}>
        <UserProfileLabel {...this.state} handleChange={this.handleChange}/>
        </form>
        </div>
        :
        <div className={styles.messageWrapper}>
        <Message msg={this.state.userAuthenticated} />
        </div>
      }
      </React.Fragment>
    )
  }
}

export default withRouter(UserProfile);