import React, { Component } from 'react';
import styles from './styles.module.css';
import layout from '../../general/mainContainer/styles.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class Help extends Component {
    render () {
        return (
            <div>
                <Icons />
                <div className={layout.bookContainer}>
                <div className={styles.content}>
                        <div className={styles.contentSection}>
                            <h3>Account Registration</h3>
                            <h5>Do I need to register for an account to purchase products from your online store?</h5>
                            <p>Yes, you need to create an account to purchase from our online store. The account created via Times Connect is a service provided by Times Publishing Limited that allows you to access all online services in the Times Publishing group with a single ID and password created by you. If you are already a registered member of any of Times Publishing's online services, you would have a Times Connect account.</p>
                            <h5>How do I register for an account in your online store?</h5>
                            <p>You can register for an account via the "Sign Up" link at the top right hand corner of our online store.</p>
                            <h5>Can I change my password or update my profile?</h5>
                            <p>Yes, you can manage your account by accessing the "Account" link at the top right hard corner of our online store.</p>
                        </div>
                        <div className={styles.contentSection}>
                            <h3>Account Registration</h3>
                            <h5>Do I need to register for an account to purchase products from your online store?</h5>
                            <p>Yes, you need to create an account to purchase from our online store. The account created via Times Connect is a service provided by Times Publishing Limited that allows you to access all online services in the Times Publishing group with a single ID and password created by you. If you are already a registered member of any of Times Publishing's online services, you would have a Times Connect account.</p>
                            <h5>How do I register for an account in your online store?</h5>
                            <p>You can register for an account via the "Sign Up" link at the top right hand corner of our online store.</p>
                            <h5>Can I change my password or update my profile?</h5>
                            <p>Yes, you can manage your account by accessing the "Account" link at the top right hard corner of our online store.</p>
                        </div>
                        <div className={styles.contentSection}>
                            <h3>Account Registration</h3>
                            <h5>Do I need to register for an account to purchase products from your online store?</h5>
                            <p>Yes, you need to create an account to purchase from our online store. The account created via Times Connect is a service provided by Times Publishing Limited that allows you to access all online services in the Times Publishing group with a single ID and password created by you. If you are already a registered member of any of Times Publishing's online services, you would have a Times Connect account.</p>
                            <h5>How do I register for an account in your online store?</h5>
                            <p>You can register for an account via the "Sign Up" link at the top right hand corner of our online store.</p>
                            <h5>Can I change my password or update my profile?</h5>
                            <p>Yes, you can manage your account by accessing the "Account" link at the top right hard corner of our online store.</p>
                        </div>
                        <div className={styles.contentSection}> 
                            <h3>Account Registration</h3>
                            <h5>Do I need to register for an account to purchase products from your online store?</h5>
                            <p>Yes, you need to create an account to purchase from our online store. The account created via Times Connect is a service provided by Times Publishing Limited that allows you to access all online services in the Times Publishing group with a single ID and password created by you. If you are already a registered member of any of Times Publishing's online services, you would have a Times Connect account.</p>
                            <h5>How do I register for an account in your online store?</h5>
                            <p>You can register for an account via the "Sign Up" link at the top right hand corner of our online store.</p>
                            <h5>Can I change my password or update my profile?</h5>
                            <p>Yes, you can manage your account by accessing the "Account" link at the top right hard corner of our online store.</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Help