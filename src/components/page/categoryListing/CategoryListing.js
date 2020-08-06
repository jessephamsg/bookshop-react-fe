//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { withRouter } from 'react-router-dom';

//COMPONENTS
import Navigation from '../../general/navigation';
import LoadingPage from '../../general/loadingPage';
import BookCard from '../../general/bookCard';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class CategoryListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: null,
            theme: null
        }
    }
    async fetchData() {
        // const theme = this.state.theme;
        const theme = this.props.match.params.catName;
        const rawData = await axios.get(`${REACT_APP_SERVER_URL}/cat/${theme}`);
        const bookData = await rawData.data.data;
        this.setState({
            view: bookData,
            theme: theme,
        })
    }
    async componentDidMount() {
        await this.fetchData();
        console.log(this.state.theme);
    }
    render() {
        if (this.state.view === null) {
            return (
                <LoadingPage />
            )
        } else {
            console.log(this.state.view)
            return (
                <React.Fragment>
                    <Navigation history={this.props.history} />
                    <h1 className={styles.bookSectionTitle}>{this.state.theme}</h1>
                    <div className={styles.bookContainer}>
                        {(this.state.view).map(book => {
                            return (
                                <BookCard data={book} />
                            )
                        })}
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default withRouter(CategoryListing);