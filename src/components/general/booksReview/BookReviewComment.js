//DEPENDENCIES
import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as moment from 'moment'
import ReactStars from "react-rating-stars-component";
import styles from './styles.module.css';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '345',
        width: '100%',
        textAlign: 'left',
        borderRadius: '0px',
        height: 'fit-content',
        display: 'flex',
        boxShadow: 'none'
    }
  }));

  
function BookReviewComment(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
        <Card elevation={3} className={classes.root}>
            <CardHeader 
                className={classes.header}
                title={
                    <Typography gutterBottom variant="body2" component="h5">
                        {props.booksOverallReview.name}
                    </Typography>
                }
                subheader={
                    <Typography gutterBottom variant="body2" color="textSecondary" component="p">
                        {moment(props.booksOverallReview.date).local().format('MMMM Do YYYY, h:mm')}
                    </Typography>
                }
            />
            <Box display='flex' flexDirection='column' justifyContent='left'>
            <div className={styles.reactStars}>
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
            </div>
            <CardContent>
                <Typography variant="body2" component="p">
                {props.booksOverallReview.review}
                </Typography>
            </CardContent>
            </Box>
        </Card>
        <div className={styles.hl}></div>
        </React.Fragment>
    )
}

export default BookReviewComment;