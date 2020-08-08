//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';
import styles from '../../general/mainContainer/styles.module.css';

//COMPONENTS
import Navigation from '../../general/navigation';
import LoadingPage from '../../general/loadingPage';
import BookCard from '../../general/bookCard';
import Footer from '../../general/footer';

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
        const currentLocation = window.location.href;
        const searchQuery = currentLocation.slice(REACT_APP_SERVER_URL.length, currentLocation.length);
        const response = await axios.get(`${REACT_APP_SERVER_URL}${searchQuery}`);
        this.setState({data: response.data.data});
    }

    async componentDidMount () {
        await this.fetchData();
    }

    render () {
        console.log(this.props.cart);
        if (this.state.data === null) {
            return (
                <LoadingPage/>
            )
          } else {
        return (
                <React.Fragment>
                    <Navigation history = {this.props.history} cart={this.props.cart} total={this.props.total}/>
                    <h1 className={styles.bookSectionTitle}>Search Results</h1>
                    <div className={styles.bookContainer}>
                        {this.state.data.map(book => {
                            return (
                                <BookCard data={book} handleAdd={this.props.handleAdd}/>
                            )
                        })}
                    </div>
                    <Footer />
                </React.Fragment>
            )
        }
    }
}

export default SearchPage;