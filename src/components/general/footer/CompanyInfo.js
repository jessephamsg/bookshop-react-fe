//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';


export class CompanyInfo extends Component {
    
    render () {
        return (
            <div>
                <h5>COMPANY</h5>
                <ul className={styles.footerSection}>
                    <li><a href='/about'>About</a></li>
                    <li><a href='/terms'>Terms</a></li>
                    <li><a href='/privacy'>Privacy</a></li>
                    <li><a href='/help'>Help</a></li>
                </ul>
            </div>
        )
    }
}

export default CompanyInfo;