//DEPENDENCIES
import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as moment from 'moment'
import ReactStars from "react-rating-stars-component";


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '345'
    }
  }));

  
function BookReviewComment(props) {
    const classes = useStyles();
    return (
        <Card elevation={3} className={classes.root}>
            <CardHeader 
                title={props.booksOverallReview.name}
                subheader={moment(props.booksOverallReview.date).local().format('MMMM Do YYYY, h:mm')}
            />
            <Box display='flex' justifyContent='center'>
            <ReactStars
                count={5}
                size={18}
                isHalf={true}
                value={props.booksOverallReview.rating}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />
            </Box>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                {props.booksOverallReview.review}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default BookReviewComment;