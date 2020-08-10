//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';
import layout from '../../general/mainContainer/horizontalLayout.module.css';

//COMPONENTS
import PaymentMethod from './PaymentMethod';
import OrderSummary from './OrderSummary';
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class Checkout extends Component {

    constructor(props) {
        super (props);
        this.handlePayment = this.handlePayment.bind(this)
    }

    async handlePayment () {
        const userData = {
            email: this.props.userEmail,
            orders: this.props.cart
        }
        const bookResponse = await axios.put(`${REACT_APP_SERVER_URL}/books/checkout`, this.props.cart);
        if(bookResponse.data.success) {
            const userResponse = await axios.put(`${REACT_APP_SERVER_URL}/user`, userData);
            if (userResponse.data.success) {
                alert('Your Order is Confirmed');
            }
        }
        window.localStorage.clear();
        window.location.replace('./');
    }
    
    render () {
        return (
            <div>
                <Navigation history= {this.props.history} cart={this.props.cart} total={this.props.total}/>
                <div className={layout.bookContainer}>
                    <PaymentMethod handlePayment={this.handlePayment}/>
                    <OrderSummary order={this.props.cart} total={this.props.total}/>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Checkout;