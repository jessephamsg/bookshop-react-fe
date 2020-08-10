//DEPENDENCIES
import React from 'react'
import { Card, Container, FormGroup, Box, TextField, FormLabel, Button } from '@material-ui/core'
import Message from '../../general/errorMessage/ErrorMessage'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'; //don't delete the Router, it will cause infinity Loop
import btnStyles from '../../general/mainContainer/styles.button.css'; //don't delete this. It's used for button styling
import styles from './styles.module.css'

function RegisterForm(props) {

    return (
        <Container>
            <Card className={styles.cardForm}>
                <Box display="flex" justifyContent="center" className={styles.registerHeader}>
                    <h1>
                        <PersonAddIcon fontSize="large" />REGISTER
                    </h1>
                </Box>
                {props.registrationError != null && props.registrationError.map((err, i) => {
                    return (
                        <Message msg={err.message} key={i} />
                    )
                })}
                <div className={styles.inputContainer}>
                    <FormGroup>
                        <FormLabel htmlFor='name' className={styles.formLabel}>Name</FormLabel>
                        <TextField
                            type='text'
                            id='name'
                            className={styles.formControl}
                            placeholder='Enter Name'
                            value={props.name}
                            onChange={props.handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='email' className={styles.formLabel}>Email</FormLabel>
                        <TextField
                            type='email'
                            id='email'
                            className={styles.formControl}
                            placeholder='Enter Email Address'
                            value={props.email}
                            onChange={props.handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='password' className={styles.formLabel}>Password</FormLabel>
                        <TextField
                            type='password'
                            id='password'
                            className={styles.formControl}
                            placeholder='Create Password'
                            value={props.password}
                            onChange={props.handleChange}
                            required
                        />
                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor='password2' className={styles.formLabel}>Confirm Password</FormLabel>
                        <TextField
                            type='password'
                            id='password2'
                            className={styles.formControl}
                            placeholder='Confirm Password'
                            value={props.password2}
                            onChange={props.handleChange}
                            required
                        />
                    </FormGroup>
                    <br />
                    <button>Register</button>
                </div>
                <div> Already Have An Account? <NavLink className={styles.aLink} to="/login">Login Here</NavLink>  </div>
            </Card>
        </Container>
    )
}

export default RegisterForm