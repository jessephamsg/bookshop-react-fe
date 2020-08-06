import React, { Component } from 'react';
import styles from './styles.module.css';
import Icons from './Icons';
import SearchNav from './SearchNav';
import BookCategory from './BookCategory'
import axios from 'axios'
import { withRouter } from "react-router-dom";

const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:4000' || 'https://bookshop-dev-be.herokuapp.com'


export class Navigation extends Component {
    constructor() {
        super()
        this.state = {
            userName: null,
            email: ''
        }
    }


    handleLogout = async (e) => {
        try {
            console.log('hi')
            const response = await axios.get('http://localhost:4000/logout', { withCredentials: true })
            console.log(response)
            sessionStorage.removeItem('userData');
            this.props.history.push('/login')
        } catch (err) {
            console.log(err)
        }
    }

    async componentDidMount() {
        try {
            const data = JSON.parse(sessionStorage.getItem('userData'));
            const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
            console.log(response)
            if (data) {
                const res = await axios.post(`${REACT_APP_SERVER_URL}/googleauth`, data)
                console.log(res.data.data)
                this.setState({ userName: res.data.data.name, email: res.data.data.email })
            }
            else if (response.data) this.setState({ userName: response.data.name, email: response.data.email })
            else this.setState({userName: null})
        } catch (err) {
            console.log(err)
            this.setState({userName: null})
        }
    }
    render() {
        return (
            <div>
                <div>
                    <Icons handleLogout={this.handleLogout} userName={this.state.userName} />
                </div>
                <div>
                    <SearchNav />
                </div>
                <div className={styles.mainNav}>
                    <BookCategory />
                </div>
            </div>
        )
    }
}

export default withRouter(Navigation);