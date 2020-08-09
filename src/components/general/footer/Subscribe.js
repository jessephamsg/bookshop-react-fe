//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';


export class Subscribe extends Component {
    
    render () {
        return (
            <div className={styles.footerSectionRight}>
                <h5>Get our deals in your inbox</h5>
                <p>Cookies Usage: We use cookies, pixels, and other technologies (collectively, "cookies") to recognise your browser or device, learn more about your interests, and provide you with essential features and services and for additional purposes</p>
            </div>
        )
    }
}

export default Subscribe;