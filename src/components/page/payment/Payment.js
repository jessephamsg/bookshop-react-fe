//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import layout from '../../general/mainContainer/styles.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class Payment extends Component {
    
    render () {
        return (
            <div>
                <Icons />
                <div className={layout.bookContainer}>
                    <div className={styles.content}>
                        <h3>Payment Methods</h3>
                        <p>
                        We accept payment via Credit Cards (Master & Visa).
                        Please select the Credit Card payment mode during shopping cart checkout.  You will be brought to a secured payment page to enter your credit card information. An email order confirmation will be sent to you once payment has been received successfully. 
                        We do not accept cash, cheque, postal order or proforma invoice.
                        </p>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Payment