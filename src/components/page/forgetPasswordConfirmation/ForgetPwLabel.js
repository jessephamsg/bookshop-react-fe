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

  
function ForgetPwLabel (props) {
    const classes = useStyles();
    return (
        <Box display='flex' justifyContent="center">
        <Card className={styles.cardForm}>
            <h1 className={styles.header}>Change Password</h1>
          {props.failureChange != null && props.failureChange.map((err, i) => {
          return (
            <Message msg={err.message} key={i} />
          )
        })}
        {props.successChange !== null && <SuccessMessage msg={props.successChange}/>}
        <div>
          <FormGroup>
            <TextField
              label='New Password'
              type="password"
              variant="outlined"
              id="password"
              className={classes.root}
              onChange={props.handleChange}
              value={props.password}
              required
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label='Confirm Password'
              type="password"
              variant="outlined"
              id="password2"
              className={classes.root}
              onChange={props.handleChange}
              value={props.password2}
              required
            />
          </FormGroup>
          </div>
          <button className={styles.formButton}>Set New Password</button>
        </Card>
      </Box>
    )
}

export default ForgetPwLabel;