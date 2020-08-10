//DEPENDENCIES
import React, {Component} from 'react';
import layout from '../../general/mainContainer/verticalLayout.module.css';
import btnStyles from '../../general/mainContainer/styles.button.css'; //don't delete this. It's used for button styling
import styles from './styles.module.css';

//COMPONENTS
import BookCardHorizontal from '../../general/bookCardHorizontal';
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';


export class Cart extends Component {
    constructor (props) {
        super (props);
        this.handleCheckout = this.handleCheckout.bind(this);
        this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
    }

    handleCheckout () {
        if(this.props.username ===null) {
            window.location.replace('./login');
        } else {
            window.location.replace('./checkout');
        }
    }

    handleRemoveFromCart (e) {
        this.props.handleRemoveFromCart(e.target.value);
    }

    render () {
        if(this.props.cart === null) {
            return (
                <div>
                    Your cart is empty
                </div>
            )
        } else {
            return (
                <div>
                    <Navigation history= {this.props.history} cart={this.props.cart} total={this.props.total}/>
                    <div className={layout.bookContainer}>
                        {(this.props.cart).map(item => {
                            return (
                                <React.Fragment>
                                    <div className={styles.cartRow}>
                                        <BookCardHorizontal data={item}/>
                                        <div className={styles.rowQty}>
                                            <span> Quantity: 1 </span>
                                            <button onClick={this.handleRemoveFromCart} value={item.raw.id}>Remove</button>
                                        </div>
                                    </div>
                                    <div className={styles.hl}></div>
                                </React.Fragment>
                            )
                        })}
                        <button onClick={this.handleCheckout}>Checkout</button>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default Cart