//DEPENDENCIES
import React, {Component} from 'react';
import btnStyles from '../../general/mainContainer/styles.button.css'; //don't delete this. It's used for button styling
import styles from './styles.module.css';
import axios from 'axios';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class cartButton extends Component {
    constructor (props) {
        super (props)
        this.handleAdd = this.handleAdd.bind(this);
    }

    async handleAdd (e) {
        const bookId = e.target.value;
        const bookResult = await axios.get(`${REACT_APP_SERVER_URL}/books/${bookId}`);
        const bookObject = bookResult.data.data[0];
        this.props.handleAdd(bookObject);
    }

    render () {
        return (
            <React.Fragment>
                <div className={styles.bookCardButton}>
                <button onClick={this.handleAdd} value={this.props.value}>Add to basket</button>
                </div>
            </React.Fragment>
        )
    }
}

export default cartButton;