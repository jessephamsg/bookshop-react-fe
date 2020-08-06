//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

//COMPONENTS
import Icons from './Icons';
import SearchNav from './SearchNav';
import BookCategory from './BookCategory';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }
    handleLogout = async (e) => {
        try {
            const response = await axios.get(`${REACT_APP_SERVER_URL}/logout`, { withCredentials: true });
            this.props.history.push('/login')
        } catch (err) {
            console.log(err.response)
        }
    }
    async handleSearchSubmit (searchValue) {
        this.props.history.push(`/search?query=${searchValue}`);
    }
    render() {
        return (
            <div>
                <div>
                    <Icons handleLogout={this.handleLogout} />
                </div>
                <form>
                    <SearchNav handleSearchSubmit={this.handleSearchSubmit}/>
                </form>
                <div className={styles.mainNav}>
                    <BookCategory 
                        categories={this.props.categories}
                        handleSelectCat = {this.props.handleSelectCat}
                    />
                </div>
            </div>
        )
    }
}

export default Navigation;