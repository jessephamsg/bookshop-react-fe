//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';
import styles from './styles.module.css';

//COMPONENTS
import Navigation from '../../general/navigation';
import LoadingPage from '../../general/loadingPage';
import BookCard from '../../general/bookCard';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class SearchPage extends Component {
    constructor (props) {
        super (props)
        this.state = {
            data: null
        }
    }
    async fetchData () {
        const searchQuery = this.props.history.location.search;
        const response = await axios.get(`${REACT_APP_SERVER_URL}/search${searchQuery}`);
        this.setState({data: response.data.data});
    }
    async componentDidMount () {
        await this.fetchData();
    }
    render () {
        if (this.state.data === null) {
            return (
                <LoadingPage/>
            )
          } else {
        return (
                <React.Fragment>
                    <Navigation history = {this.props.history}/>
                    <h1 className={styles.bookSectionTitle}>Search Results</h1>
                    <div className={styles.bookContainer}>
                        {this.state.data.map(book => {
                            return (
                                <BookCard data={book}/>
                            )
                        })}
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default SearchPage;