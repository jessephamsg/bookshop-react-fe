//DEPENDENCIES
import React, {Component} from 'react';
import ReactStars from "react-rating-stars-component";
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'; //don't delete the Router, it will cause infinity Loop
import styles from './styles.module.css';
import axios from 'axios';

//VARIABLES

//COMPONENTS
import ProductDetail from '../../page/productDetail';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;

export class BookCard extends Component {
    constructor (props) {
        super (props)
        this.handleAdd = this.handleAdd.bind(this)
    }
    async handleAdd (e) {
        const bookId = e.target.value;
        const bookResult = await axios.get(`${REACT_APP_SERVER_URL}/books/${bookId}`);
        const bookObject = bookResult.data.data[0];
        this.props.handleAdd(bookObject);
    }
    render () {
        return (
            <div className={styles.bookCard}>
                <div className={styles.bookCover} 
                    style={{ 
                        backgroundImage:`url(${this.props.data.raw.img})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat',
                        width:'100%',
                        height:'250px'}}>
                </div>
                <div className={styles.bookCardSummary}>
                    <h4>{this.props.data.formatted.formattedTitle}</h4>
                    <p>{this.props.data.formatted.formattedAuthor}</p>
                    <div className={styles.bookRating}>
                        <ReactStars
                            count={5}
                            size={18}
                            isHalf={true}
                            value={this.props.data.raw.avgRating}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                            />
                    </div>
                    <div className={styles.bookPrice}>
                        <p className={styles.bookDiscountedPrice}>{this.props.data.formatted.formattedDiscountedPrice}</p>
                        <p className={styles.bookOriginalPrice}>{this.props.data.formatted.formattedOriginalPrice}</p>
                    </div>
                    <button onClick={this.handleAdd} value={this.props.data.raw.id}>Add to basket</button>
                </div>
            </div>
        )
    }
}

export default BookCard;