//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';

//COMPONENTS
import Section from '../../general/bookSection';
import Endpoints from '../../../config/endpoints';

//VARIABLES
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class HomePage extends Component {
    constructor (props) {
        super (props)
        this.state = {
            limit: 6,
            categories: [
                {
                    name: 'bestSelling',
                    heading: 'Bestselling Books'
                },
                {
                    name: 'topRanking',
                    heading: 'Recommended Books'
                },
                {
                    name: 'Non-Fiction',
                    heading: 'Non-Fiction Books'
                },
                {
                    name: 'Fiction',
                    heading: 'Fiction Books'
                },
                {
                    name: 'Children',
                    heading: 'Children Books'
                },
                {
                    name: 'Science',
                    heading: 'Science Books'
                },
            ]
        }
    }
    render () {
        return (
            <React.Fragment>
                <div className={styles.homePageBody}>
                {this.state.categories.map(category => {
                    return (
                        <Section category={`${category.name}`} heading={`${category.heading}`} limit={this.state.limit}/>
                    )
                })}
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage
