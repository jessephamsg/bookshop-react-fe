import React, {Component} from 'react';

//COMPONENTS
import BookCard from '../../general/bookCard';
import Navigation from '../../general/navigation';
import Footer from '../../general/footer';

export class Cart extends Component {
    constructor (props) {
        super (props);
        this.state = {

        }
        this.handleCheckout = this.handleCheckout.bind(this);
    }
    handleCheckout () {
        
    }
    render () {
        return (
            <div>
                <Navigation history= {this.props.history} cart={this.props.cart} total={this.props.total}/>
                {(this.props.cart).map(item => {
                    return (
                        <div>
                            <BookCard data={item}/>
                        </div>
                    )
                })}
                <button onClick={this.handleCheckout}>Checkout</button>
                <Footer />
            </div>
        )
    }
}

export default Cart