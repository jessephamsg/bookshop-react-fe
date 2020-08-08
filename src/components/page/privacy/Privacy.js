import React, { Component } from 'react';
import styles from './styles.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class Privacy extends Component {
    render () {
        return (
            <div>
                <Icons />
                <h1>Privacy</h1>
                <Footer />
            </div>
        )
    }
}

export default Privacy