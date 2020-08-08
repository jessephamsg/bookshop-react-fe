//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';


export class SupportInfo extends Component {
    render () {
        return (
            <div>
                <h5>SUPPORT</h5>
                <ul className={styles.footerSection}>
                    <li><a href='/payment-method'>Payment</a></li>
                    <li><a href='/delivery'>Delivery</a></li>
                    <li><a href='/return'>Return</a></li>
                    <li><a href='/faq'>FAQ</a></li>
                </ul>
            </div>
        )
    }
}

export default SupportInfo;