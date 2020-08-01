import React, {Component} from 'react';
import ReactStars from "react-rating-stars-component";

export class BookCard extends Component {
    render () {
        return (
            <div className='bookCard'>
                <div className='bookCover' style={{ backgroundImage:`url(${this.props.data.raw.img})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',width:'100%',height:'250px'}}>
                    {/* <img src={`${this.props.data.raw.img}`}/> */}
                </div>
                <div className='bookCardSummary'>
                    <h4>{this.props.data.formatted.formattedTitle}</h4>
                    <p>{this.props.data.formatted.formattedAuthor}</p>
                    <div className='bookRating'>
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
                    <div className='bookPrice'>
                        <p>{this.props.data.formatted.formattedDiscountedPrice}</p>
                        <p>{this.props.data.formatted.formattedOriginalPrice}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookCard;