//DEPENDENCIES
import React, { Component } from 'react';
import layout from '../../general/mainContainer/simplePageContainer.module.css';
import btnstyles from '../../general/mainContainer/styles.button.css';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'; //don't delete the Router, it will cause infinity Loop

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class ThankYou extends Component {

    render() {
        return (
            <div>
                <Icons />
                <div className={layout.pageContainer}>
                    <div className={layout.pageTitle}>Thank You</div>
                    <h3>Order ID: ORD202008115364</h3>
                    <p>Your order had been successfully placed. Please quote the order ID above whenever you contact us relating to this order. Thank you and we're looking forward to your next purchase :)</p>
                    <p>Have a great day ahead (^-^)/</p>
                    <p>&nbsp;</p>
                    <NavLink className="defaultButton" to="/">Back To Home</NavLink>
                </div>
                <Footer />
            </div>
        )
    }
}

export default ThankYou