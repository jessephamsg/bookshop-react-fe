import React, {Component} from 'react';
import BookCard from '../bookCard/BookCard';
import styles from './styles.module.css';


export class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: this.props.data.slice(0, 6)
        } 
    }
    render() {
        return (
            <div className={styles.bookSection}>
                <div className={styles.bookSectionTitle}>
                    <h3>{this.props.heading}</h3>
                </div>
                <div className={styles.bookSectionBooks}>
                    {(this.state.view).map(book => {
                        return (
                            <BookCard data={book}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Section;