//DEPENDENCIES
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Homepage from './components/page/home';
import Register from './components/page/register';
import ChangePassword from './components/page/changePassword/ChangePassword';
import Login from './components/page/login';
import SearchPage from './components/page/search';
import UserProfile from './components/page/userProfile/UserProfile';

//VARIABLES
import Endpoints from './config/endpoints';
import CategoryListing from './components/page/categoryListing';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;
const GOOGLE_AUTH_URL = Endpoints.GOOGLE_AUTH_URL;

//MAIN
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      email: '',
      uniqueCat: null
    }
  }

  async componentDidMount() {
    try {
      await this.fetchData();
      const data = JSON.parse(sessionStorage.getItem('userData'));
      const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
      if (data) {
        const res = await axios.post(`${GOOGLE_AUTH_URL}/googleauth`, data)
        console.log(res.data.data.email)
        this.setState({ userName: res.data.data.name, email: res.data.data.email })
      }
      else if (response.data) this.setState({ userName: response.data.name, email: response.data.email })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path='/userprofile' component={UserProfile} />
              <Route exact path='/changepassword' component={ChangePassword} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/' component={Homepage} />
              <Route path="/cat/:catName" component={CategoryListing} />
              <Route exact path='/search' component={SearchPage} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
