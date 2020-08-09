//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';
import axios from 'axios';

//COMPONENTS
import LoadingPage from '../loadingPage';
import BookCard from '../bookCard/BookCard';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class Section extends Component {

    constructor(props) {
        super(props)
        this.state = {
            view: null
        } 
    }

    async fetchData() {
        const rawData = await axios.get(`${REACT_APP_SERVER_URL}/books?query=${this.props.category}&limit=${this.props.limit}`);
        const bookData = await rawData.data.data;
        this.setState({
          view: bookData,
        })
    }

    async componentDidMount() {
        await this.fetchData();
    }
    
    render() {
        if (this.state.view === null) {
            return (
                <LoadingPage/>
            )
          } else {
        return (
            <div className={styles.bookSection}>
                <div className={styles.bookSectionTitle}>
                    <h3>{this.props.heading}</h3>
                </div>
                <div className={styles.bookSectionBooks}>
                    {(this.state.view).map(book => {
                        return (
                            <BookCard data={book} handleAdd={this.props.handleAdd}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
}

export default Section;