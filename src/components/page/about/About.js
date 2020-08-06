//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';

//COMPONENTS
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';


export class About extends Component {
    render () {
        return (
            <div>
                <Navigation history = {this.props.history}/>
                <h1>About page</h1>
                <Footer />
            </div>
        )
    }
}

export default About