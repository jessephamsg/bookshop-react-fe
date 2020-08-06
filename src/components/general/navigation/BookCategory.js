import React, {Component} from 'react';
import styles from './styles.module.css';


export class BookCategory extends Component {
    constructor (props) {
        super (props)
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect (e) {
        e.preventDefault();
        const cat = e.target.text;
        this.props.handleSelectCat(cat);
    }
    render () {
        return (
            <React.Fragment>
                <div id={styles.mainNavCategory}>Shop by category</div>
                    <div className={styles.categoryNav}>
                        {this.props.categories.map(cat => {
                            return (
                            <li>
                                <a href={`/cat/${cat}`} onClick={this.handleSelect}>{cat}</a>
                            </li>
                            )
                        })}
                    </div>
            </React.Fragment>
        )
    }
}


export default BookCategory;