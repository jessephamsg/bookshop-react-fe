//DEPENDENCIES
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';
import './App.css';

//COMPONENTS
import Navigation from './components/general/navigation';
import Register from './components/page/register';
import Login from './components/page/login';
import Homepage from './components/page/home';
import Endpoints from './config/endpoints';

//VARIABLES
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;
const GOOGLE_AUTH_URL = Endpoints.GOOGLE_AUTH_URL;

//MAIN
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bookData: null,
      views: {
        bookCategories: null,
        fuzzySearchResult: null
        },
      userName: null
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
  }
  async fetchData() {
    const rawData = await axios.get(`${REACT_APP_SERVER_URL}/home`);
    const bookData = await rawData.data.data;
    this.setState({
      bookData,
      views: {
        bookCategories: bookData,
      }
    })
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
  async handleSearchSubmit (searchText) {
    const response = await axios.get(`${REACT_APP_SERVER_URL}/search?query=${searchText}`);
    this.setState({views: {
      fuzzySearchResult: response.data.data
    }})
  }
  async componentDidMount() {
    await this.fetchData();
    await this.getPassportUserData();
    await this.getGoogleUserData();
  }
  render() {
    if (this.state.bookData === null) {
      return (
        <div>
          <LoadingScreen
            loading={true}
            bgColor='#f1f1f1'
            spinnerColor='#9ee5f8'
            textColor='#676767'
            text='Please wait.. '
          >
          </LoadingScreen>
        </div>
      )
    } else {
      return (
        <div className="App">
        <Navigation handleSearchSubmit={this.handleSearchSubmit} categories={this.state.views.bookCategories}/>
        <Router>
          <div>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/search' component={Login} />
              <Route exact path='/' component={Homepage}/>} />
            </Switch>
          </div>
        </Router>
        </div>
      );
    }
  }
}

export default App;
