//DEPENDENCIES
import React, { Component } from 'react';
import axios from 'axios';
import layout from '../../general/mainContainer/styles.module.css';
import { withRouter } from 'react-router-dom';

//COMPONENTS
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';
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
        await this.fetchData();
    }

    async componentWillReceiveProps(props) {
        await this.setState({
            theme: props.match.params.catName
        })
        await this.fetchData();
    }

    render() {
        if (this.state.view === null) {
            return (
                <LoadingPage />
            )
        } else {
            return (
                <React.Fragment>
                    <Navigation history={this.props.history} cart={this.props.cart} total={this.props.total}/>
                    <div className={layout.bookContainer}>
                        {(this.state.view).map(book => {
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


export default withRouter(CategoryListing);