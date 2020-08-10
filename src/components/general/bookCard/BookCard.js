//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'; //don't delete the Router, it will cause infinity Loop
import ReactStars from "react-rating-stars-component";

//COMPONENTS
import CartButton from '../cartButton';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class BookCard extends Component {

    constructor (props) {
        super (props)
    }

    render () {
        return (
            <div className={styles.bookCard}>
                <Link to={`/prod/${this.props.data.raw.id}`}>
                    <div className={styles.bookCover}
                        style={{
                            backgroundImage: `url(${this.props.data.raw.img})`
                        }}>
                    </div>
                </Link>

                <div className={styles.bookCardSummary}>
                    <Link to={`/prod/${this.props.data.raw.id}`} className={styles.bookTitle}>
                        <h4>{this.props.data.formatted.formattedTitle}</h4>
                    </Link>
                    <div>{this.props.data.formatted.formattedAuthor}</div>
                    <div className={styles.bookRating}>
                        <ReactStars
                            count={5}
                            size={18}
                            isHalf={false}
                            value={this.props.data.raw.avgRating}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />
                    </div>
                    <div className={styles.bookPrice}>
                        <p className={styles.bookDiscountedPrice}>{this.props.data.formatted.formattedDiscountedPrice}</p>
                        <p className={styles.bookOriginalPrice}>{(this.props.data.formatted.formattedOriginalPrice === this.props.data.formatted.formattedDiscountedPrice) ? null : this.props.data.formatted.formattedOriginalPrice}</p>
                    </div>
                    <CartButton handleAdd = {this.props.handleAdd} value={this.props.data.raw.id}/>
                </div>
            </div>
        )
    }
}

export default BookCard;