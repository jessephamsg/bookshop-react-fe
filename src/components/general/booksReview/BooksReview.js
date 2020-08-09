//COMPONENT 
import BooksReviewLabelContainer from './BooksReviewLabelContainer'

// DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;

class BooksReview extends Component {
    constructor() {
        super()
        this.state = {
            booksData: '',
            review: '',
            name: null,
            email: '',
            id: '',
            rating: 0,
            clicked: false,
            userAuthenticated: ''
        }
    }

    async componentDidMount() {
        const booksRes = await axios.get(`${REACT_APP_SERVER_URL}/books/5f1f0f3653c362200bc170a1`)
        console.log(booksRes.data.data[0].raw)
        this.setState({ booksData: booksRes.data.data[0].raw, review: booksRes.data.data[0].raw })
        try {
          const data = JSON.parse(sessionStorage.getItem('userData'));
          const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
          console.log(response)
          if (data) {
            const res = await axios.post(`${REACT_APP_SERVER_URL}/googleauth`, data)
            console.log(res.data.data.email)
            this.setState({
              id: res.data.data.id,
              name: res.data.data.name,
              email: res.data.data.email,
            })
          }
          else if (response.data)
            this.setState({
              id: response.data._id,
              name: response.data.name,
              email: response.data.email,
            })
          else {
            this.setState({ userAuthenticated: `Please Login to have access to User Profile` })
          }
        } catch (err) {
          console.log(err.response)
          console.log(err.res)
        }
      }

      handleSubmit = async (e) => {
        try {
          e.preventDefault()
          const data = { ...this.state }
          const response = await axios.put(`${REACT_APP_SERVER_URL}/booksreview`, data)
          console.log(response.data)
        } catch (err) {
          console.log(err.response)
        }
      }

      handleClick = (e) => {
          this.setState({ clicked: !this.state.clicked})
      }

      handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
      }

    render() {
        return (
            <div>
                <h1>user name {this.state.name}</h1>
                <h1>books rating {this.state.booksData.rating}</h1>
                <h1>books AVG rating {this.state.booksData.avgRating}</h1>
                <h1>books ID{this.state.booksData.id}</h1>
                <h1>books review {this.state.booksData.reviews}</h1>
                <BooksReviewLabelContainer 
                {...this.state} 
                handleClick={this.handleClick}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                />
            </div>
        )
    }
} 

export default BooksReview;