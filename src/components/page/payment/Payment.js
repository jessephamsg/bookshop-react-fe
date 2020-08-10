//DEPENDENCIES
import React, { Component } from 'react';
import layout from '../../general/mainContainer/simplePageContainer.module.css';
import axios from 'axios';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;

export class Payment extends Component {
    handleLogout = async (e) => {
        try {
          const response = await axios.get(`${REACT_APP_SERVER_URL}/logout`, { withCredentials: true })
          sessionStorage.removeItem('userData');
          this.props.history.push('/login')
        } catch (err) {
          console.log(err)
        }
      }
    render() {
        return (
            <div>
                <Icons handleLogout = {this.handleLogout}/>
                <div className={layout.pageContainer}>
                    <div className={layout.pageTitle}>Payment Method</div>
                    <p>
                        We accept payment via Credit Cards (Master & Visa).
                        Please select the Credit Card payment mode during shopping cart checkout.  You will be brought to a secured payment page to enter your credit card information. An email order confirmation will be sent to you once payment has been received successfully.
                        We do not accept cash, cheque, postal order or proforma invoice.
                        </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Payment