//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom'; //don't delete the Router, it will cause infinity Loop

//COMPONENTS
import LoadingPage from '../loadingPage';
import CategoryListing from '../../page/categoryListing';

//VARIABLES
import Endpoints from '../../../config/endpoints';
import { nullLiteral } from '@babel/types';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class BookCategory extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categories: null
        }
    }

    async fetchData() {
        const rawData = await axios.get(`${REACT_APP_SERVER_URL}/home`);
        const categories = await rawData.data.data;
        this.setState({ categories })
    }

    async componentDidMount() {
        this.fetchData()
    }
    
    render() {
        if (this.state.categories === null) {
            return (
                <LoadingPage />
            )
        } else {
            return (
                <React.Fragment>
                    <div id={styles.mainNavCategory}>Shop by category</div>
                    <div className={styles.categoryNav}>
                        {this.state.categories.map(catName => {
                            return (
                                <Switch>
                                    <NavLink to={`/cat/${catName}`} className={styles.categoryLink} activeClassName={styles.categorySelected}>{catName}</NavLink>
                                    <Route path="/cat/:catName" component={CategoryListing} />
                                </Switch>
                            )
                        })}
                    </div>
                    <div className={styles.cartInPage}>
                    <span className={styles.cartItem}>
                        {(this.props.cart !== null) ? 
                            <a href='/cart'>Item in Cart: {this.props.cart.length}</a> :
                            <a href='/cart'>Item in Cart: 0</a>
                        }
                        </span>
                        <span className={styles.cartTotal}>
                        {(this.props.cart !== null) ? 
                            <a href='/cart'>Total: SGD {this.props.total}</a> :
                            <a href='/cart'>Total: SGD 0</a>
                        }
                        </span>
                        
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default BookCategory;
