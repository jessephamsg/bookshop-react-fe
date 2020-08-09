//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';
import verticalLayout from '../../general/mainContainer/verticalLayout.module.css';

//COMPONENTS
import LoadingPage from '../../general/loadingPage';
import BookCard from '../../general/bookCardHorizontal';
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';
import Message from '../../general/errorMessage/ErrorMessage'
import UserAuthenticator from '../../utils/authenticateUser';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class OrderHistory extends Component {

    constructor (props) {
        super (props) 
        this.state = {
            email: '',
            userAuthenticated: null,
            orderhistory: null
        }
    }

    async componentDidMount () {
        const result = await UserAuthenticator.authenticateUser();
        if (result) {
            const orders = await axios.get(`${REACT_APP_SERVER_URL}/user/orders?query=${this.state.email}`);
            this.setState({ 
                  email: result.email,
                  orderhistory: orders 
                })
        } else {
            this.setState({
                userAuthenticated: `Please Login to have access to Order History`,
                orderhistory: []
                }); 
        }
    }
     
    render () {
        if(this.state.orderhistory === null) {
            return (
                <LoadingPage/>
            )
        }
        return (
            <React.Fragment>
                <Icons />
                { (this.state.orderhistory.length === 0) ? 
                    <Message msg={this.state.userAuthenticated} /> :
                    <div className={verticalLayout.bookContainer}>
                        {(this.state.orderhistory.data.data).map(order => {
                            return (
                                <BookCard data={order}/>
                            )
                        })}
                    </div>
                }
                <Footer />
            </React.Fragment>
        )
    }
}

export default OrderHistory;