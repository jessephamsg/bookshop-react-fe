// DEPENDENCIES
import React from 'react';
import { Card, Container, FormGroup, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles.module.css';
import ReactStars from "react-rating-stars-component";

// COMPONENT
import SuccessMessage from '../../general/successMessage/SuccessMessage';
import BookReviewComment from './BookReviewComment';


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '1em'
    },
    card: {
        width: '100%',
        textAlign: 'left',
        borderRadius: '0px',
        boxShadow: 'none',
    }
  }));

  const inputProps = {
    min: 1,
    max: 5
  };

function BooksReviewLabelForm(props) {
    const classes = useStyles();
    return (
        <Card className={classes.card}>
            <div className={styles.wrapper}>
            <div className={styles.reviewHeading}>
                <h3>Customer Reviews</h3>
                <button onClick={props.handleClick} style={{ display: props.userAuthorized ? '' : 'none'}} className={styles.reviewButton}>Review</button>
            </div>
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
            </div>
            {props.successChange !== null && <SuccessMessage msg={props.successChange}/>}
            <form style={{ display: props.clicked ? '' : 'none'}} onSubmit={props.handleSubmit} className={styles.form}>
                <Container>
                    <Card className={classes.card}>
                        <FormGroup>
                            <TextField
                            label='Rating'
                            variant="outlined"
                            type="number"
                            id="rating"
                            name="rating"
                            inputProps={inputProps}
                            className={classes.root}
                            onChange={props.handleChange}
                            value={props.rating}
                            required
                            />
                        </FormGroup>
                        <FormGroup>
                            <TextField
                            label='Reviews'
                            variant="outlined"
                            type="text"
                            id="review"
                            name="review"
                            className={classes.root}
                            onChange={props.handleChange}
                            value={props.reviews}
                            required
                            />
                        </FormGroup>
                        <button className={styles.formButton}>Submit</button>
                    </Card>
                </Container>
            </form>
            {props.booksOverallReview.map(book => {
                return (
                    <BookReviewComment booksOverallReview={book} />
                )
            })}
        </Card> 
    )
}

export default BooksReviewLabelForm;