import React, { Component } from 'react';
import BookCard from '../../general/bookCard/BookCard';
import styles from './styles.module.css';


export class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: this.props.data.slice(0, 6),
            theme: this.props.theme
        }
    }
    render() {
        return (
            <div className={styles.bookSection}>
                <div className={styles.bookSectionTitle}>
                    <h3>{this.props.heading}</h3>
                </div>
                <div className={styles.bookSectionBooks}>
                    <BookCard data={this.state.view} />
                </div>
            </div>
        )
    }
}

export default Section;