//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import { Card, Container, FormGroup, FormLabel, TextField, Box } from '@material-ui/core'

export class PaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.handlePayment = this.handlePayment.bind(this);
    }

    handlePayment() {
        this.props.handlePayment();
    }

    render() {
        return (
            <React.Fragment>
                <div className={styles.paymentMethodContainer}>
                    <h3>Payment Method</h3>
                    <div className={styles.paymentMethodContent}>
                        <div className={styles.paymentMethodRow}>
                            <img src='https://camo.githubusercontent.com/1d762edbbb72ba93ea97cdea47ef5e2073aff47a/687474703a2f2f73746f726167652e6a302e686e2f6372656469742d636172642d6c6f676f732d322e706e67' />
                        </div>
                        <div className={styles.inputContainer}>
                            <FormGroup>
                                <FormLabel htmlFor='CardholderName' className={styles.formLabel}>Cardholder Name</FormLabel>
                                <TextField
                                    type="text"
                                    id="CardholderName"
                                    name="CardholderName"
                                    className={styles.formControl}
                                    placeholder="Enter Cardholder Name"
                                    value=""
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor='cardNumber' className={styles.formLabel}>Credit Card Number</FormLabel>
                                <TextField
                                    type="text"
                                    id="cardNumber"
                                    className={styles.formControl}
                                    placeholder="Enter Credit Card Number"
                                    value=""
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <FormLabel htmlFor='expiryDate' className={styles.formLabel}>Credit Card Expiry Date</FormLabel>
                                <TextField
                                    type="text"
                                    id="expiryDate"
                                    className={styles.formControl}
                                    placeholder="MM/YYYY"
                                    value=""
                                    required
                                />
                            </FormGroup>
                            <br/>
                            <button onClick={this.handlePayment}>Order and Pay</button>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default PaymentMethod;