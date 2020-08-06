import React, { Component } from 'react';
import './App.css';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';
import Navigation from './components/general/navigation';
import Register from './components/page/register/Register';
import ChangePassword from './components/page/changePassword/ChangePassword';
import Login from './components/page/login/Login';
import Section from './components/page/bookSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserProfile from './components/page/userProfile/UserProfile'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000' || 'https://bookshop-dev-be.herokuapp.com'

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
        childrenBooks: null,
        fictionBooks: null,
        nonFictionBooks: null,
        scienceBooks: null
      },
      userName: null,
      email: ''
    }
  }
  async fetchData() {
    const rawData = await axios.get(`${REACT_APP_SERVER_URL}/home`);
    const bookData = await rawData.data.data;
    this.setState({
      bookData,
      views: {
        bookCategories: ['Children', 'Science', 'Art', 'Fiction', 'Non-Fiction'],
        newArrival: null,
        bestSelling: bookData.bestSellingBooks,
        recommendedBooks: bookData.topRankingBooks,
        childrenBooks: bookData.childrenBooks,
        fictionBooks: bookData.fictionBooks,
        nonFictionBooks: bookData.nonFictionBooks,
        scienceBooks: bookData.scienceBooks
      }
    })
  }

  async componentDidMount() {
    try {
      await this.fetchData();
      const data = JSON.parse(sessionStorage.getItem('userData'));
      const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
      console.log(response)
      if (data) {
        const res = await axios.post(`${REACT_APP_SERVER_URL}/googleauth`, data)
        console.log(res.data.data.email)
        this.setState({ userName: res.data.data.name, email: res.data.data.email })
      }
      else if (response.data) this.setState({ userName: response.data.name, email: response.data.email })
    } catch (err) {
      console.log(err)
    }
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
      <div className="app">
        <Router>
          <div>
            <Switch>
              <Route exact path ='/userprofile' component={UserProfile} />
              <Route exact path='/changepassword' component={ChangePassword} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <div>
                <Route exact path='/' component={Navigation} />
                <div className='homePageBody'>
                  <Section data={this.state.views.bestSelling} heading='Bestselling Books' />
                  <Section data={this.state.views.recommendedBooks} heading='Recommended Books' />
                  <Section data={this.state.views.nonFictionBooks} heading='Non-fiction Books' />
                  <Section data={this.state.views.fictionBooks} heading='Fiction Books' />
                  <Section data={this.state.views.childrenBooks} heading='Children Books' />
                  <Section data={this.state.views.scienceBooks} heading='Science Books' />
                </div>
              </div>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
