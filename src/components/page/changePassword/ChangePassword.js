//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import LoadingScreen from 'react-loading-screen';
import { withRouter } from "react-router-dom";
import styles from './styles.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';
import ChangePasswordLabel from './ChangePasswordLabel';
import ProfileMenu from '../userProfile/ProfileMenu';
import LoadingPage from '../../general/loadingPage';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


class ChangePassword extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: null,
      googleUser: false,
      localUser: false,
      successChange: null,
      failureChange: null,
      password: '',
      password2: '',
      currentPassword: ''
    }
  }

  async componentDidMount() {
    try {
      const data = JSON.parse(sessionStorage.getItem('userData'));
      const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true });
      if (data) {
        const res = await axios.post(`${REACT_APP_SERVER_URL}/googleauth`, data);
        this.setState({
          id: res.data.data.id,
          googleUser: true,
        })
      } else if (response.data)
        this.setState({
          id: response.data._id,
          localUser: true,
        })
        else {
          this.props.history.push('/')
        }
    } catch (err) {
      alert (`Change password error due to ${err}`)
    }
  }

  handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const data = { ...this.state }
      const response = await axios.post(`${REACT_APP_SERVER_URL}/changepassword`, data,  { withCredentials: true })
      if (response.data.success) this.setState ({ 
        successChange: response.data.message,
        currentPassword: '',
        password: '',
        password2: '' 
      })
    } catch (err) {
      this.setState({ failureChange: err.response.data.error })
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
        <Icons />
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