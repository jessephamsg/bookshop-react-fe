import React, {Component} from 'react';
import pageStyles from './styles.module.css';


export class PaymentMethod extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
        this.handlePayment = this.handlePayment.bind(this);
    }
    handlePayment () {
        this.props.handlePayment();
    }
    render() {
        return (
            <React.Fragment>
            <div className={pageStyles.paymentMethodContainer}>
                <h3>Payment Method</h3>
                <div>
                    <div>
                        <img src=''/>
                        <img src=''/>
                        <img src=''/>
                    </div>
                    <div>
                        <h5>CARD NUMBER</h5>
                        <input></input>
                    </div>
                    <div>
                        <h5>EXPIRATION DATE</h5>
                        <input></input>
                    </div>
                </div>
                <button onClick={this.handlePayment}>Order and Pay</button>
            </div>
            </React.Fragment>
        )
    }
}

export default PaymentMethod;