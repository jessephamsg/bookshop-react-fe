//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import styles from './styles.module.css';
import { withRouter } from 'react-router-dom';

//COMPONENTS
import Navigation from '../../general/navigation';
import LoadingPage from '../../general/loadingPage';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: null,
            theme: null
        }
    }
    getParamCatName() {
        const theme = this.props.match.params.catName;
        this.setState({
            theme: theme,
        })
    }
    async fetchData() {
        const theme = this.state.theme;
        const rawData = await axios.get(`${REACT_APP_SERVER_URL}/cat/${theme}`);
        const bookData = await rawData.data.data;
        this.setState({
            view: bookData,
            theme: theme,
        })
    }
    async componentDidMount() {
        await this.getParamCatName();
        console.log('state.theme at componentDidMount: ', this.state.theme);
        await this.fetchData();
    }
    async componentWillReceiveProps(props) {
        console.log('componentWillReceiveProps: ', props.match.params.catName);
        await this.setState({
            theme: props.match.params.catName
        })
        console.log('state.theme at componentWillReceiveProps: ', this.state.theme);
        await this.fetchData();
    }
    render() {
        if (this.state.view === null) {
            return (
                <LoadingPage />
            )
        } else {
            console.log('state.view: ', this.state.view)
            return (
                <React.Fragment>
                    <Navigation history={this.props.history} />
                    <h1 className={styles.bookSectionTitle}>{this.state.theme}</h1>
                    <div className={styles.bookContainer}>
                        <div>Book Details here</div>
                    </div>
                </React.Fragment>
            )
        }
    }
}

export default withRouter(ProductDetail);