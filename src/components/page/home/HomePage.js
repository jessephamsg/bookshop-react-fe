import React, { Component } from 'react';
import styles from './styles.module.css';
import Section from '../../general/bookSection';
import Navigation from '../../general/navigation/Navigation';


export class HomePage extends Component {
    constructor (props) {
        super(props)
    }
    render () {
        console.log(this.props)
        return (
        <React.Fragment>
            <div className={styles.homePageBody}>
            <Section data={this.props.bestSelling} heading='Bestselling Books'/>
            <Section data={this.props.recommendedBooks} heading='Recommended Books'/>
            <Section data={this.props.nonFictionBooks} heading='Non-fiction Books'/>
            <Section data={this.props.fictionBooks} heading='Fiction Books'/>
            <Section data={this.props.childrenBooks} heading='Children Books'/>
            <Section data={this.props.scienceBooks} heading='Science Books'/>
            </div>
        </React.Fragment>
        )
    }
}

export default HomePage
