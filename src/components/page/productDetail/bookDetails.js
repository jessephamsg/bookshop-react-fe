import React, {Component} from 'react';
import styles from './styles.module.css';
import ReactStars from "react-rating-stars-component";


function BookDetails (props) {

    return (
        <React.Fragment>
        <div className={styles.bookTitle}>{props.view[0].formatted.formattedTitle}</div>
            <div className={styles.bookAuthor}>by {props.view[0].formatted.formattedAuthor}</div>
            <div className={styles.bookRating}>
                <ReactStars
                    count={5}
                    size={18}
                    isHalf={true}
                    value={props.view[0].raw.avgRating}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                />
                <span className={styles.bookAvgRating}> (Avg. Rating: {props.view[0].raw.avgRating})</span>
            </div>
            <div className={styles.bookPrice}>
                <p className={styles.bookDiscountedPrice}>{props.view[0].formatted.formattedDiscountedPrice}</p>
                <p className={styles.bookOriginalPrice}>{props.isDiscounted}</p>
            </div>
            <div className={styles.bookExtraInfo}>Available Stock: {props.view[0].raw.quantity}</div>
            <div className={styles.bookExtraInfo}>Theme: {props.view[0].raw.theme}</div>
            <div className={styles.bookExtraInfo}>Format: {props.view[0].raw.format}</div>
            <div className={styles.bookExtraInfo}>Publisher: {props.view[0].raw.publisher}</div>
            <div className={styles.bookExtraInfo}>Dimension: {props.view[0].raw.dimensions.height}mm (H) x {props.view[0].raw.dimensions.width}mm (W)</div>
            <div className={styles.bookExtraInfo}>Thickness: {props.view[0].raw.dimensions.thickness}mm</div>
            <br />
        </React.Fragment>
    )
    
}

export default BookDetails