// DEPENDENCIES
import React from 'react';
import { Card, Box, FormGroup, FormLabel, TextField, InputAdornment } from '@material-ui/core';
import styles from './styles.module.css';
import { makeStyles } from '@material-ui/core/styles';

// COMPONENTS
import SuccessMessage from '../../general/successMessage/SuccessMessage'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      margin: '1em'
    }
  }));

function UserProfileLabel(props) {
    const classes = useStyles();
    return (
        <Box display='flex' justifyContent="center">
        <Card className={styles.cardForm}>
            <h1 className={styles.header}>Personal profile</h1>
            {props.successChange !== null && <SuccessMessage msg={props.successChange}/>}
          <FormGroup>
            <TextField
              label='Name'
              variant="outlined"
              type="text"
              id="name"
              name="name"
              className={classes.root}
              onChange={props.handleChange}
              value={props.name}
              required
            />
          </FormGroup>
          <FormGroup>
            <TextField
              label='Email'
              type="email"
              variant="outlined"
              id="email"
              className={classes.root}
              onChange={props.handleChange}
              value={props.email}
              required
            />
          </FormGroup>

          <button className={styles.formButton}>Save Changes</button>
        </Card>
      </Box>
    )
}

export default UserProfileLabel;