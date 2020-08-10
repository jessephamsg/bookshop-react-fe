//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { withRouter } from 'react-router-dom';
import UserAuthenticator from '../../utils/authenticateUser';

//COMPONENTS
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';
import LoadingPage from '../../general/loadingPage';
import BooksReviewLabelForm from '../../general/booksReview/BooksReviewLabelForm';
import BookDetails from './bookDetails';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class ProductDetail extends Component {

    constructor(props) {
        super(props)
        this.state = {
            view: null,
            bookID: null,
            isDiscounted: null,
            clicked: false,
            rating: null,
            review: '',
            userAuthorized: false,
            userName: null,
            successChange: null,
            booksOverallReview: null
        }
    }

    getParamCatName() {
        const bookID = this.props.match.params.index || this.props.match.params.bookID;
        this.setState({
            bookID: bookID,
        })
    }

    async fetchData() {
        const bookID = this.state.bookID;
        const rawData = await axios.get(`${REACT_APP_SERVER_URL}/books/${bookID}`);
        const bookData = await rawData.data.data;
        const booksOverallReview = bookData[0].raw.reviews
        bookData[0].raw.avgRating = Math.round(bookData[0].raw.avgRating * 100) / 100;
        const isDiscounted = (bookData[0].formatted.formattedOriginalPrice === bookData[0].formatted.formattedDiscountedPrice) ? null : bookData[0].formatted.formattedOriginalPrice;
        this.setState({
            view: bookData,
            bookID: bookID,
            isDiscounted: isDiscounted,
            booksOverallReview: booksOverallReview
        })
    }

    async authenticateUser () {
        const result = await UserAuthenticator.authenticateUser();
        if (result) {
            this.setState({ 
                  userName: result.name, 
                  userAuthorized: !this.state.userAuthorized
                })
        }
      }

    async componentDidMount() {
        await this.getParamCatName();
        await this.fetchData();
        await this.authenticateUser();
    }

    handleClick = (e) => {
        this.setState({ clicked: !this.state.clicked})
    }

    handleSubmit = async (e) => {
        try {
          e.preventDefault()
          const data = { ...this.state }
          const response = await axios.post(`${REACT_APP_SERVER_URL}/${this.state.bookID}/booksreview`, data)
          if(response.data.success) {
              this.setState({ successChange: response.data.message })
          }
        } catch (err) {
          console.log(err.response)
        }
      }

    handleChange = (e) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
      }

    render() {
        if (this.state.view === null) {
            return (
                <LoadingPage />
            )
        } else {
            return (
                <div className={styles.bookDetailPage}>
                    <Navigation history={this.props.history} cart={this.props.cart} total={this.props.total} />
                    <div className={styles.bookContainer}>
                        <div className={styles.bookDetail}>
                            <BookDetails {...this.state} handleAdd = {this.props.handleAdd}/>
                        </div>
                        <div className={styles.reviewWrapper}>
                        <BooksReviewLabelForm 
                            {...this.state} 
                            handleClick={this.handleClick}
                            handleSubmit={this.handleSubmit}
                            handleChange={this.handleChange}
                        />
                        </div>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default withRouter(ProductDetail);