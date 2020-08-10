import React, {Component} from 'react';
import styles from './styles.module.css';
import ReactStars from "react-rating-stars-component";
import CartButton from '../../general/cartButton';


class BookDetails extends Component {
    render () {
        return (
            <React.Fragment>
            <div className={styles.bookDetailsContainer}>
            <div className={styles.bookKeyInfoContainer}>
                <div className={styles.bookDescriptionContainer}>
                    <div className={styles.bookDescriptionLeft}>
                        <div className={styles.bookCover}
                            style={{ backgroundImage: `url(${this.props.view[0].raw.img})` }}>
                        </div>
                    </div>
                    <div className={styles.bookDescriptionRight}>
                        <div className={styles.bookTitle}>{this.props.view[0].formatted.formattedTitle}</div>
                        <div className={styles.bookAuthor}>by {this.props.view[0].formatted.formattedAuthor}</div>
                        <div className={styles.bookRating}>
                            <ReactStars
                                count={5}
                                size={18}
                                isHalf={true}
                                value={this.props.view[0].raw.avgRating}
                                emptyIcon={<i className="far fa-star"></i>}
                                halfIcon={<i className="fa fa-star-half-alt"></i>}
                                fullIcon={<i className="fa fa-star"></i>}
                                activeColor="#ffd700"
                            />
                            <span className={styles.bookAvgRating}> (Avg. Rating: {this.props.view[0].raw.avgRating})</span>
                        </div>
                        <div className={styles.bookSummary}>
                            <p>Summary:</p>
                            <p>{this.props.view[0].raw.description}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.bookPriceContainer}>
                    <div className={styles.bookPrice}>
                        <p className={styles.bookDiscountedPrice}>{this.props.view[0].formatted.formattedDiscountedPrice}</p>
                        <p className={styles.bookOriginalPrice}>{this.props.isDiscounted}</p>
                    </div>
                    {(this.props.view[0].raw.quantity === 0) ? 
                        <p className={styles.noStock}>Out of Stock</p> :
                        <p className={styles.availableStock}>Available - Dispatch within 3 business days</p>
                    }
                    <CartButton handleAdd = {this.props.handleAdd} value={this.props.view[0].raw.id}/>
                </div>
            </div>
            <div className={styles.bookExtraInfoContainer}>
                <h3>Product Details</h3>
                <div className={styles.bookExtraInfoContent}>
                    <div className={styles.bookExtraInfoLeft}>
                        <div className={styles.bookExtraInfo}>Theme: {this.props.view[0].raw.theme}</div>
                        <div className={styles.bookExtraInfo}>Format: {this.props.view[0].raw.format}</div>
                        <div className={styles.bookExtraInfo}>Publisher: {this.props.view[0].raw.publisher}</div>
                    </div>
                    <div className={styles.bookExtraInfoRight}>
                        <div className={styles.bookExtraInfo}>Height: {this.props.view[0].raw.dimensions.height}mm (H)</div>
                        <div className={styles.bookExtraInfo}>Width: {this.props.view[0].raw.dimensions.width}mm (H)</div>
                        <div className={styles.bookExtraInfo}>Thickness: {this.props.view[0].raw.dimensions.thickness}mm</div>
                    </div>
                </div>
            </div>
            </div>
            </React.Fragment>
        )
    }
}

export default BookDetails