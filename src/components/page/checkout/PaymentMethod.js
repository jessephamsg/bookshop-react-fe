import React, {Component} from 'react';
import pageStyles from './styles.module.css';


export class PaymentMethod extends Component {
    constructor(props){
        super(props);
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
                    <div className={pageStyles.paymentMethodContent}>
                        <div className={pageStyles.paymentMethodRow}>
                            <img src='https://camo.githubusercontent.com/1d762edbbb72ba93ea97cdea47ef5e2073aff47a/687474703a2f2f73746f726167652e6a302e686e2f6372656469742d636172642d6c6f676f732d322e706e67'/>
                        </div>
                        <div className={pageStyles.paymentMethodRow}>
                            <h5>CARD NUMBER</h5>
                            <input></input>
                        </div>
                        <div className={pageStyles.paymentMethodRow}>
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