//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import ReactStars from "react-rating-stars-component";
import { withRouter } from 'react-router-dom';

//COMPONENTS
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';
import LoadingPage from '../../general/loadingPage';
import BooksReviewLabelForm from '../../general/booksReview/BooksReviewLabelForm';


//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;
const GOOGLE_AUTH_URL = Endpoints.GOOGLE_AUTH_URL;

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
        console.log(this.props.match.params);
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
        console.log(booksOverallReview)
        this.setState({
            view: bookData,
            bookID: bookID,
            isDiscounted: isDiscounted,
            booksOverallReview: booksOverallReview
        })
        console.log('this.state.isDiscounted at fetchData: ', this.state.isDiscounted)
    }
    async authenticateUser () {
        try {
          const data = JSON.parse(sessionStorage.getItem('userData'));
          const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
          console.log(response)
          if (data) {
            const res = await axios.post(`${GOOGLE_AUTH_URL}/googleauth`, data)
            console.log(res.data.data.email)
            this.setState({ 
              userName: res.data.data.name, 
              userAuthorized: !this.state.userAuthorized
            })
          }
          else if (response.data) 
            this.setState({ 
              userName: response.data.name, 
              userAuthorized: !this.state.userAuthorized
            })
        } catch (err) {
          console.log(err)
        }
      }
    async componentDidMount() {
        await this.getParamCatName();
        console.log('state.bookID at componentDidMount: ', this.state.bookID);
        await this.fetchData();
        await this.authenticateUser();
    }
    // async componentWillReceiveProps(props) { //at the moment this is not used. It's can be used if we're clicking another product detail from product detail page
    //     console.log('componentWillReceiveProps: ', props.match.params.bookID);
    //     await this.setState({
    //         bookID: props.match.params.bookID
    //     })
    //     console.log('state.bookID at componentWillReceiveProps: ', this.state.bookID);
    //     await this.fetchData();
    // }
    async handleAdd(e) {
        const bookId = e.target.value;
        const bookResult = await axios.get(`${REACT_APP_SERVER_URL}/books/${bookId}`);
        const bookObject = bookResult.data.data[0];
        this.props.handleAdd(bookObject);
    }
    handleClick = (e) => {
        this.setState({ clicked: !this.state.clicked})
        console.log(this.state.clicked)
    }
    handleSubmit = async (e) => {
        try {
          e.preventDefault()
          const data = { ...this.state }
          console.log(data)
          const response = await axios.post(`${REACT_APP_SERVER_URL}/${this.state.bookID}/booksreview`, data)
          console.log(response.data)
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
            console.log('state.view: ', this.state.view)
            return (
                <div className={styles.bookDetailPage}>
                    <Navigation history={this.props.history} cart={this.props.cart} total={this.props.total} />
                    <h1 className={styles.bookSectionTitle}>{this.state.view[0].formatted.formattedTitle}</h1>
                    <div className={styles.bookContainer}>
                        <div className={styles.bookCover}
                            style={{ backgroundImage: `url(${this.state.view[0].raw.img})` }}>
                        </div>
                        <div className={styles.bookDetail}>
                            <div className={styles.bookTitle}>{this.state.view[0].formatted.formattedTitle}</div>
                            <div className={styles.bookAuthor}>by {this.state.view[0].formatted.formattedAuthor}</div>
                            <div className={styles.bookRating}>
                                <ReactStars
                                    count={5}
                                    size={18}
                                    isHalf={true}
                                    value={this.state.view[0].raw.avgRating}
                                    emptyIcon={<i className="far fa-star"></i>}
                                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                                    fullIcon={<i className="fa fa-star"></i>}
                                    activeColor="#ffd700"
                                />
                                <span className={styles.bookAvgRating}> (Avg. Rating: {this.state.view[0].raw.avgRating})</span>
                            </div>
                            <div className={styles.bookPrice}>
                                <p className={styles.bookDiscountedPrice}>{this.state.view[0].formatted.formattedDiscountedPrice}</p>
                                <p className={styles.bookOriginalPrice}>{this.state.isDiscounted}</p>
                            </div>
                            <div className={styles.bookExtraInfo}>Available Stock: {this.state.view[0].raw.quantity}</div>
                            <div className={styles.bookExtraInfo}>Theme: {this.state.view[0].raw.theme}</div>
                            <div className={styles.bookExtraInfo}>Format: {this.state.view[0].raw.format}</div>
                            <div className={styles.bookExtraInfo}>Publisher: {this.state.view[0].raw.publisher}</div>
                            <div className={styles.bookExtraInfo}>Dimension: {this.state.view[0].raw.dimensions.height}mm (H) x {this.state.view[0].raw.dimensions.width}mm (W)</div>
                            <div className={styles.bookExtraInfo}>Thickness: {this.state.view[0].raw.dimensions.thickness}mm</div>
                            <br />
                            <button onClick={this.handleAdd} value={this.state.view[0].raw.id}>Add to basket</button>
                        </div>
                        <div className={styles.bookSummary}>
                            <p>Summary:</p>
                            <p>{this.state.view[0].raw.description}</p>
                        </div>
                        <button onClick={this.props.history.goBack}>Back</button>
                    </div>
                    <BooksReviewLabelForm 
                        {...this.state} 
                        handleClick={this.handleClick}
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                    />
                    <Footer />
                </div>
            )
        }
    }
}

export default withRouter(ProductDetail);