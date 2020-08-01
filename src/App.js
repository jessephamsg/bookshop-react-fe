import React, { Component } from 'react';
import './App.css';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';
import Navigation from './components/general/navigation';
import Register from './components/page/register/Register';
import Login from './components/page/login/Login';
import Section from './components/page/bookSection';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
      userName: null
    }
  }
  async fetchData () {
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
      <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/' component={Navigation} />
          </Switch>
        </div>
      </Router>
        <Navigation />
        <div className='homePageBody'>
          <Section data={this.state.views.bestSelling} heading='Bestselling Books'/>
          <Section data={this.state.views.recommendedBooks} heading='Recommended Books'/>
          <Section data={this.state.views.nonFictionBooks} heading='Non-fiction Books'/>
          <Section data={this.state.views.fictionBooks} heading='Fiction Books'/>
          <Section data={this.state.views.childrenBooks} heading='Children Books'/>
          <Section data={this.state.views.scienceBooks} heading='Science Books'/>
        </div>
      </div>
    );
  }
}

export default App;
