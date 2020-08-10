import React, {Component} from 'react';
import ReactStars from "react-rating-stars-component";
import styles from './styles.module.css';
import axios from 'axios';


export class BookCard extends Component {

    render () {
        return (
            <div className={styles.bookCard}>
                <div className={styles.bookCover} 
                    style={{ 
                        backgroundImage:`url(${this.props.data.raw.img})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center', 
                        backgroundRepeat: 'no-repeat',
                        width:'30%',
                        height:'250px'}}>
                </div>
                <div className={styles.bookCardSummary}>
                    <div className={styles.bookCardSummaryh4}>
                        <h4>{this.props.data.formatted.formattedTitle}</h4>
                    </div>
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
                    </div>
                    <div>
                        {(this.props.data.quantity === 0) ? 
                            <p className={styles.noStock}>Out of Stock</p> :
                            <p className={styles.availableStock}>Available - Dispatch within 3 business days</p>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BookCard;