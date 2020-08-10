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

export class Return extends Component {
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
                    <div className={layout.pageTitle}>Return Policy</div>
                    <h3>What can I return?</h3>
                    <p>
                        For a full refund, you may return any item in its original condition within 45 days of receipt. Please note that any shrink-wrapped items that have been opened may not be returned. Additionally, if you have any inquiries regarding ebook returns, please see our eBook Information page. Shipping costs are non-refundable.
                            </p>
                    <h3>How long do I have to make a return?</h3>
                    <p>
                        You may request a return within 45 days of receipt. Once the 45 days have expired, you may contact our Customer Service Department. Please be aware any returns requested after the 45 day deadline may result in a partial or declined refund.
                            </p>
                    <h3>How do I make a return?</h3>
                    <p>
                        To make a return, please send an email us with the subject line: “Return Request.” Please include your name, the order/invoice number, and the items and quantities you wish to return. You will receive a return authorization document and additional instructions within 1-2 business days. Please note that any return shipping costs are the customer’s responsibility.
                            </p>
                    <h3>Help! I received my order, but the contents are missing/damaged/incorrect.</h3>
                    <p>
                        We strives to provide excellent service. We are so sorry if you receive an incomplete or damaged order. Please contact us so that we may correct any issues as quickly as possible.
                            </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Return