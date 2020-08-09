import React from 'react';
import { Card, Box, FormGroup, FormLabel, TextField, InputAdornment } from '@material-ui/core';

function BooksReviewLabel(props) {
    return (
        <Card>
            {props.booksData.reviews.name}
            {props.booksData.reviews.rating}
            {props.booksData.reviews.date}
            {props.booksData.reviews.review}
        </Card>
    )
}

export default BooksReviewLabel;