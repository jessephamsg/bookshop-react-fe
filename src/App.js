//DEPENDENCIES
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';

//COMPONENTS
import Register from './components/page/register';
import Login from './components/page/login';
import Homepage from './components/page/home';
import SearchPage from './components/page/search';

//VARIABLES
import Endpoints from './config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;
const GOOGLE_AUTH_URL = Endpoints.GOOGLE_AUTH_URL;

//MAIN
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null
    }
  }
  async getPassportUserData() {
    const response = await axios.get(`${REACT_APP_SERVER_URL}/user`)
    this.setState({userName: response.data.name})
  }
  async getGoogleUserData() {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    const res = await axios.get(`${GOOGLE_AUTH_URL}${data}`)
    this.setState({name: res.data.name})
  }
  async componentDidMount() {
    await this.getPassportUserData();
    await this.getGoogleUserData();
  }
  render() {
      return (
        <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/' component={Homepage}/>
              <Route exact path='/search' component={SearchPage} />
            </Switch>
          </div>
        </Router>
        </div>
      );
  }
}

export default App;
