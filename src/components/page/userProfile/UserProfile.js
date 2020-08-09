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
import UserAuthenticator from '../../utils/authenticateUser';

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
    const result = await UserAuthenticator.authenticateUser();
    if (result) {
        this.setState({
          id: result.id,
          name: result.name,
          email: result.email,
          googleUser: true,
          userData: result
        })
    } else {
      this.setState({ userAuthenticated: `Please Login to have access to User Profile` })
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
      e.preventDefault()
      const data = { ...this.state }
      console.log(data);
      const response = await axios.post(`${REACT_APP_SERVER_URL}/changeUserProfile`, data)
      if (response.data.success) this.setState({ successChange: response.data.message })
    } catch (err) {
      console.log(err.response)
    }
  }

  handleChange = (e) => {
    const { value, id } = e.target
    this.setState({ [id]: value })
  }

  render() {
    return (
      <React.Fragment>
        <Icons handleLogout = {this.handleLogout} userName={this.state.userData}/>
        {this.state.userAuthenticated == null ?
          <div className={styles.wrapper}>
            <ProfileMenu localUser={this.state.localUser} />
            <form onSubmit={this.handleSubmit}>
              <UserProfileLabel {...this.state} handleChange={this.handleChange} />
            </form>
          </div>
          :
          <div className={styles.messageWrapper}>
            <Message msg={this.state.userAuthenticated} />
          </div>
        }
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(UserProfile);