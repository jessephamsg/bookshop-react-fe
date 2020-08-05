//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

//COMPONENTS
import Icons from './Icons';
import SearchNav from './SearchNav';
import BookCategory from './BookCategory';
import Endpoints from '../../../config/endpoints';

//VARIABLES
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class Navigation extends Component {
    constructor(props) {
        super(props);
    }
    handleLogout = async (e) => {
        try {
            const response = await axios.get(`${REACT_APP_SERVER_URL}/logout`, { withCredentials: true })
            this.props.history.push('/login')
        } catch (err) {
            console.log(err.response)
        }
    }
    render() {
        return (
            <div>
                <div>
                    <Icons handleLogout={this.handleLogout} />
                </div>
                <div>
                    <SearchNav handleSearchSubmit={this.props.handleSearchSubmit}/>
                </div>
                <div className={styles.mainNav}>
                    <BookCategory categories={this.props.categories}/>
                </div>
            </div>
        )
    }
}

export default Navigation;