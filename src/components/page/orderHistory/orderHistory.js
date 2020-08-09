//DEPENDENCIES
import React, {Component} from 'react';
import axios from 'axios';

//COMPONENTS
import LoadingPage from '../../general/loadingPage';
import BookCard from '../../general/bookCardHorizontal';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;


export class OrderHistory extends Component {
    
    render () {
        if (this.props.orderhistory === null) {
            return (
                <LoadingPage />
            )
        } else {
            return (
                <div>
                    {(this.props.orderhistory.data.data).map(order => {
                        return (
                            <BookCard data={order}/>
                        )
                    })}
                </div>
            )
        }
    }
}

export default OrderHistory;