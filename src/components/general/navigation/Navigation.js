//DEPENDENCIES
import React, { Component } from 'react';
import styles from './styles.module.css';
import axios from 'axios';
import { withRouter } from "react-router-dom";

//COMPONENTS
import Icons from './Icons';
import SearchNav from './SearchNav';
import BookCategory from './BookCategory'

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class Navigation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: null,
            email: ''
        }
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this)
    }

    handleLogout = async (e) => {
        try {
            const response = await axios.get(`${REACT_APP_SERVER_URL}/logout`, { withCredentials: true })
            sessionStorage.removeItem('userData');
            this.props.history.push('/login')
        } catch (err) {
            alert (`Unable to log out due to ${err}`)
        }
    }

    async componentDidMount() {
        try {
            const data = JSON.parse(sessionStorage.getItem('userData'));
            const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
            if (data) {
                const res = await axios.post(`${REACT_APP_SERVER_URL}/googleauth`, data)
                this.setState({ userName: res.data.data.name, email: res.data.data.email })
            }
            else if (response.data) this.setState({ userName: response.data.name, email: response.data.email })
            else this.setState({userName: null})
        } catch (err) {
            this.setState({userName: null})
        }
    }

    async handleSearchSubmit (searchValue) {
        this.props.history.push(`/search?query=${searchValue}`);
    }
    render() {
        return (
            <div>
                <div>
                    <Icons handleLogout={this.handleLogout} userName={this.state.userName} />
                </div>
                <form>
                    <SearchNav handleSearchSubmit={this.handleSearchSubmit}/>
                </form>
                <div className={styles.mainNav}>
                    <BookCategory 
                        categories={this.props.categories}
                        handleSelectCat = {this.props.handleSelectCat}
                        cart = {this.props.cart}
                        total = {this.props.total}
                    />
                </div>
            </div>
        )
    }
}

export default withRouter(Navigation);