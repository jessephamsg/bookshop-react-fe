import React, { Component } from 'react';
import './App.css';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';
import Navigation from './components/general/navigation'

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000/'

export class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      bookData: null,
      views: {
        bookCategories: null,
        newArrival: null,
        bestSelling: null,
        recommendedBooks: null,
      }
    }
  }
  async fetchData () {
    const data = await axios.get(REACT_APP_SERVER_URL);
    const bookData = await data.data.data;
    this.setState({
        bookData
    })
  }
  async componentDidMount () {
    await this.fetchData();
  }
  render () {
    if(this.state.bookData===null) {
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
        <Navigation />
        <p>{this.state.bookData[0].formattedTitle}</p>
      </div>
    );
  }
}

export default App;
