//DEPENDENCIES
import React from 'react'
import GoogleLogin from 'react-google-login'
import { Card, Container, FormGroup, FormLabel, TextField, Box } from '@material-ui/core'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'; //don't delete the Router, it will cause infinity Loop
import ForwardIcon from '@material-ui/icons/Forward'
import btnStyles from '../../general/mainContainer/styles.button.css'; //don't delete this. It's used for button styling
import styles from './styles.module.css'

//COMPONENTS
import Message from '../../general/errorMessage/ErrorMessage'


function LoginLabel(props) {

  return (
    <Container>
      <Card className={styles.cardForm}>
        <Box display="flex" justifyContent="center" className={styles.registerHeader}>
          <h1>
            <ForwardIcon fontSize="large" />LOGIN
          </h1>
        </Box>
        {props.loginError != null && props.loginError.map((err, i) => {
          return (
            <Message msg={err.message} key={i} />
          )
        })}
        <div className={styles.inputContainer}>
          <FormGroup>
            <FormLabel htmlFor='email' className={styles.formLabel}>Email</FormLabel>
            <TextField
              type="email"
              id="email"
              name="email"
              className={styles.formControl}
              placeholder="Enter Email"
              onChange={props.handleChange}
              value={props.email}
              required
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor='password' className={styles.formLabel}>Password</FormLabel>
            <TextField
              type="password"
              id="password"
              className={styles.formControl}
              placeholder="Enter Password"
              onChange={props.handleChange}
              value={props.password}
              required
            />
          </FormGroup>
        </div>
        <button>Login with Email</button>
        <div className={styles.signInButton}>
          <GoogleLogin
            clientId='825484293224-ridcbmjkgra0tiubl10q2fcpaqre5bj5.apps.googleusercontent.com'
            buttonText='Login with Google Account'
            onSuccess={props.responseGoogle}
            onFailure={props.responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div>No Account? <NavLink className={styles.aLink} to="/register">Register Here</NavLink> || 
        Forgot your Password? <NavLink className={styles.aLink} to="/forgotpw">Click Here</NavLink> </div>
      </Card>
    </Container>
  )
}

export default LoginLabel