//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';

//COMPONENTS
import CompanyInfo from './CompanyInfo';
import SupportInfo from './SupportInfo';
import FollowUs from './FollowUs';
import Subscribe from './Subscribe';


export class Footer extends Component {
    render () {
        return (
            <div className={styles.footerContainer}>
                <CompanyInfo />
                <SupportInfo />
                <FollowUs />
                <Subscribe />
            </div>
        )
    }
}

export default Footer;