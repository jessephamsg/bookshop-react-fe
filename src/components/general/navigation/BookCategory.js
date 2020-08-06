import React, { Component } from 'react';
import styles from './styles.module.css';
import axios from 'axios';

//COMPONENTS
import LoadingPage from '../loadingPage';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class BookCategory extends Component {
    constructor (props) {
        super (props)
        this.state = {
            categories: null
        }
    }
    async fetchData () {
        const rawData = await axios.get(`${REACT_APP_SERVER_URL}/home`);
        const categories = await rawData.data.data;
        this.setState({ categories })
    }
    async componentDidMount () {
        this.fetchData()
    }
    render () {
        if (this.state.categories === null) {
            return (
                <LoadingPage/>
            )
          } else {
        return (
            <React.Fragment>
                <div id={styles.mainNavCategory}>Shop by category</div>
                    <div className={styles.categoryNav}>
                        {this.state.categories.map(cat => {
                            return (<li><a href={`/cat/${cat}`}>{cat}</a></li>)
                        })}
                    </div>
            </React.Fragment>
        )
    }
}
}

export default BookCategory;
