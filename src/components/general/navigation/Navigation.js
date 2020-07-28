import React, {Component} from 'react';
import styles from './styles.module.css';
import Icons from './Icons';
import SearchNav from './SearchNav';
import BookCategory from './BookCategory'

export class Navigation extends Component {
    render () {
        return (
            <div>
                <div>
                    <Icons />
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

export default Navigation;