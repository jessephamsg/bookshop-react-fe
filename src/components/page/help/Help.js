import React, { Component } from 'react';
import layout from '../../general/mainContainer/simplePageContainer.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class Help extends Component {
    render() {
        return (
            <div>
                <Icons />
                <div className={layout.pageContainer}>
                    <div className={layout.pageTitle}>Help on Account Registration</div>
                    <h3>Do I need to register for an account to purchase products from your online store?</h3>
                    <p>Yes, you need to create an account to purchase from our online store. You can register using your email or using Google Account.</p>
                    <h3>How do I register for an account in your online store?</h3>
                    <p>You can register for an account via the "Sign Ip" link at the top right hand corner of our online store. Then click on the "Register Here" link at the bottom.</p>
                    <h3>Can I update my profile?</h3>
                    <p>Yes, you can manage your account by accessing the "Account Details" link at the top right hard corner of our online store.</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Help