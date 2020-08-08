import React, { Component } from 'react';
import styles from './styles.module.css';

//COMPONENTS
// import Navigation from '../../general/navigation';
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class Return extends Component {
    render () {
        return (
            <div>
                {/* <Navigation history = {this.props.history}/> */}
                <Icons />
                <h1>Terms</h1>
                <Footer />
            </div>
        )
    }
}

export default Return