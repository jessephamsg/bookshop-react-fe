//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { withRouter } from 'react-router-dom';

//COMPONENTS
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';
import LoadingPage from '../../general/loadingPage';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: null,
            bookID: null
        }
    }
    getParamCatName() {
        const bookID = this.props.match.params.index || this.props.match.params.bookID;
        console.log(this.props.match.params);
        this.setState({
            bookID: bookID,
        })
    }
    async fetchData() {
        const bookID = this.state.bookID;
        const rawData = await axios.get(`${REACT_APP_SERVER_URL}/books/${bookID}`);
        const bookData = await rawData.data.data;
        this.setState({
            view: bookData,
            bookID: bookID,
        })
        console.log('state.view at fetchData: ', this.state.view)
    }
    async componentDidMount() {
        await this.getParamCatName();
        console.log('state.bookID at componentDidMount: ', this.state.bookID);
        await this.fetchData();
    }
    // async componentWillReceiveProps(props) { //at the moment this is not used. It's can be used if we're clicking another product detail from product detail page
    //     console.log('componentWillReceiveProps: ', props.match.params.bookID);
    //     await this.setState({
    //         bookID: props.match.params.bookID
    //     })
    //     console.log('state.bookID at componentWillReceiveProps: ', this.state.bookID);
    //     await this.fetchData();
    // }
    render() {
        if (this.state.view === null) {
            return (
                <LoadingPage />
            )
        } else {
            console.log('state.view: ', this.state.view)
            return (
                <React.Fragment>
                    <Navigation history={this.props.history} cart={this.props.cart} total={this.props.total}/>
                    <h1 className={styles.bookSectionTitle}>{this.state.view[0].formatted.formattedTitle}</h1>
                    <div className={styles.bookContainer}>
                        <div>Book details here</div>
                    </div>
                    <Footer />
                </React.Fragment>
            )
        }
    }
}

export default withRouter(ProductDetail);