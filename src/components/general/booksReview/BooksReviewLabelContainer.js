// DEPENDENCIES
import React from 'react';
import { Card, Container, FormGroup, FormLabel, TextField, InputAdornment } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './styles.module.css';

// COMPONENT
import BooksReviewLabel from './BooksReviewLabel';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '1em'
    }
  }));

function BooksReviewLabelContainer(props) {
    const classes = useStyles();
    return (
        <Card>
            <h1>CUSTOMER REVIEWS</h1>
            <button onClick={props.handleClick}>Write a review</button>
            <form style={{ display: props.clicked ? '' : 'none'}} onSubmit={props.handleSubmit}>
                <Container>
                    <Card>
                        <FormGroup>
                            <TextField
                            label='Rating'
                            variant="outlined"
                            type="number"
                            id="rating"
                            name="rating"
                            step="0.01"
                            min="1"
                            max="5"
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
            {props.booksData.avgRating}
            {/* {props.data.map(books => {
                return (
                    <BooksReviewLabel booksData={books}/>
                )
            })}  */}
        </Card> 
    )
}

export default BooksReviewLabelContainer;