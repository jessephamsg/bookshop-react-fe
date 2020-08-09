//DEPENDENCIES
import React, {Component} from 'react';
import styles from '../../general/mainContainer/styles.module.css';
import pageStyles from './styles.module.css';

//COMPONENTS
import BookCard from '../../general/bookCardHorizontal';
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';


export class Cart extends Component {
    constructor (props) {
        super (props);
        this.handleCheckout = this.handleCheckout.bind(this);
    }

    handleCheckout () {
        if(this.props.username ===null) {
            window.location.replace('./login');
        } else {
            window.location.replace('./checkout');
        }
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
                    <h1 className={styles.bookSectionTitle}>Your Cart</h1>
                    <div className={pageStyles.bookContainer}>
                        {(this.props.cart).map(item => {
                            return (
                                <div className={pageStyles.cartRow}>
                                    <BookCard data={item}/>
                                    <div className={pageStyles.rowQty}>
                                        <p> Quantity: 1 </p>
                                        <button className={pageStyles.removeButton}>Remove from Cart</button>
                                    </div>
                                </div>
                            )
                        })}
                        <button className={pageStyles.checkoutButton} onClick={this.handleCheckout}>Checkout</button>
                    </div>
                    <Footer />
                </div>
            )
        }
    }
}

export default Cart