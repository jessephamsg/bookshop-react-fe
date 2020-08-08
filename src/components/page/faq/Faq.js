import React, { Component } from 'react';
import styles from './styles.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class Faq extends Component {
    render () {
        return (
            <div>
                <Icons />
                <h1>Faq</h1>
                <Footer />
            </div>
        )
    }
}

export default Faq