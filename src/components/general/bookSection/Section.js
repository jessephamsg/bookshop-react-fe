//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';
import LoadingScreen from 'react-loading-screen';
import axios from 'axios';

//COMPONENTS
import BookCard from '../bookCard/BookCard';
import Endpoints from '../../../config/endpoints';

//VARIABLES
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
              <div>
                <LoadingScreen
                  loading={true}
                  bgColor='#f1f1f1'
                  spinnerColor='#9ee5f8'
                  textColor='#676767'
                  text='Please wait.. '
                >
                </LoadingScreen>
              </div>
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
                            <BookCard data={book}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}
}

export default Section;