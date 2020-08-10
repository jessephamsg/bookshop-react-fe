//DEPENDENCIES
import React from 'react';
import { Card, Box, FormGroup, TextField } from '@material-ui/core';
import styles from './styles.module.css';
import { makeStyles } from '@material-ui/core/styles';

//COMPONENTS
import Message from '../../general/errorMessage/ErrorMessage'
import SuccessMessage from '../../general/successMessage/SuccessMessage'


const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '1em',
    }
  }));

  
function ForgetPasswordLabel (props) {
    const classes = useStyles();
    return (
        <Box display='flex' justifyContent="center">
        <Card className={styles.cardForm}>
            <h1 className={styles.header}>Reset Password</h1>
          {props.failureChange != null && props.failureChange.map((err, i) => {
          return (
            <Message msg={err} key={i} />
          )
        })}
        {props.successChange !== null && <SuccessMessage msg={props.successChange}/>}
        <div>
          <FormGroup>
            <TextField
              label='Email Address'
              variant="outlined"
              type="email"
              id="email"
              className={classes.root}
              onChange={props.handleChange}
              value={props.currentPassword}
              required
            />
          </FormGroup>
          </div>
          <button className={styles.formButton}>Reset Password</button>
        </Card>
      </Box>
    )
}

export default ForgetPasswordLabel;