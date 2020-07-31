import React, { Component } from 'react';
import './App.css';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';
import Navigation from './components/general/navigation'
import Register from './components/page/register/Register'
import Login from './components/page/login/Login'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000'

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: null,
      views: {
        bookCategories: null,
        newArrival: null,
        bestSelling: null,
        recommendedBooks: null,
      },
      userName: null
    }
  }
  async fetchData() {
    const data = await axios.get(REACT_APP_SERVER_URL);
    const bookData = await data.data.data;
    this.setState({
      bookData
    })
  }

  async getPassportUserData() {
    const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
    this.setState({userName: response.data.name})
    console.log(response.data.name)
  }

  async getGoogleUserData() {
    const data = JSON.parse(sessionStorage.getItem('userData'));
    const res = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${data}`)
    console.log(res.data.name)
    this.setState({name: res.data.name})
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
            text='Here an introduction sentence (Optional)'
          >
          </LoadingScreen>
        </div>
      )
    }
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Navigation} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
