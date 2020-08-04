import React, { Component } from 'react';
import styles from './styles.module.css';
import Icons from './Icons';
import SearchNav from './SearchNav';
import BookCategory from './BookCategory'
import axios from 'axios'

export class Navigation extends Component {
    constructor(props) {
        super(props);
    }

    handleLogout = async (e) => {
        try {
            console.log('hi')
            const response = await axios.get('http://localhost:4000/logout', { withCredentials: true })
            console.log(response)
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
                    <SearchNav />
                </div>
                <div className={styles.mainNav}>
                    <BookCategory categories={this.props.categories}/>
                </div>
            </div>
        )
    }
}

export default Navigation;