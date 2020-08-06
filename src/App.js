//DEPENDENCIES
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';
import './App.css';

//COMPONENTS
import Navigation from './components/general/navigation';
import Register from './components/page/register/Register';
import Login from './components/page/login/Login';
import Section from './components/general/bookSection';
import Homepage from './components/page/home/HomePage';
import CategoryListing from './components/page/categoryListing/CategoryListing';

//VARIABLES
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000' || 'https://bookshop-dev-be.herokuapp.com';
const GOOGLE_AUTH_URL = 'https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=';

//MAIN
export class App extends Component {
  constructor(props) {
    super(props)
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
        scienceBooks: null,
        fuzzySearchResult: null,
        },
      userName: null
    }
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.handleSelectCat = this.handleSelectCat.bind(this);
  }
  async handleSelectCat(cat){
    const catData = await axios.get(`${REACT_APP_SERVER_URL}/cat/${cat}` )
    console.log(catData);
    return catData
  }
  async fetchData() {
    const rawData = await axios.get(`${REACT_APP_SERVER_URL}/home`);
    const bookData = await rawData.data.data;
    console.log('bookData:',bookData);
    this.setState({
      bookData,
      views: {
        bookCategories: bookData.uniqueCat,
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
    console.log(this.state.views.fuzzySearchResult);
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
        <Navigation 
          handleSearchSubmit={this.handleSearchSubmit} 
          categories={this.state.views.bookCategories}
          handleSelectCat = {this.handleSelectCat}
          />
        <Router>
          <div>
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/search' component={Login} />
              <Route exact path='/' render={ props => <Homepage {...this.state.views}/>} />
            </Switch>
          </div>
        </Router>
        </div>
      );
    }
  }
}

export default App;
