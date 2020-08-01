import React, {Component} from 'react';
import ReactStars from "react-rating-stars-component";
import styles from './styles.module.css';


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
                </div>
            </div>
        )
    }
}

export default BookCard;