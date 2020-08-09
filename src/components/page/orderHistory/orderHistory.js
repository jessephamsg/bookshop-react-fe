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
        try {
            const data = JSON.parse(sessionStorage.getItem('userData'));
            const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
            if (data) {
              const res = await axios.post(`${REACT_APP_SERVER_URL}/googleauth`, data)
              this.setState({
                email: res.data.data.email,
              })
              const orders = await axios.get(`${REACT_APP_SERVER_URL}/user/orders?query=${this.state.email}`);
            this.setState({orderhistory: orders})
            } else if (response.data) {
                this.setState({
                  email: response.data.email,
              })
              const orders = await axios.get(`${REACT_APP_SERVER_URL}/user/orders?query=${this.state.email}`);
            this.setState({orderhistory: orders})
            } else {
              this.setState({
                userAuthenticated: `Please Login to have access to Order History`,
                orderhistory: []
                });
            }
          } catch (err) {
            console.log(err.response)
            console.log(err.res)
          }
    }
     
    render () {
        console.log(this.state.orderhistory)
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