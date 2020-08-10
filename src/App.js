//DEPENDENCIES
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UserAuthenticator from './components/utils/authenticateUser';
import CartLocalStorageHandler from './components/utils/handleCart';

//COMPONENTS - BOOKS
import Homepage from './components/page/home';
import SearchPage from './components/page/search';
import CategoryListing from './components/page/categoryListing';
import Cart from './components/page/cart';
import Checkout from './components/page/checkout';
import UserProfile from './components/page/userProfile/UserProfile'
import ProductDetail from './components/page/productDetail';
import OrderHistory from './components/page/orderHistory';

//COMPONENTS - AUTH
import Register from './components/page/register';
import ChangePassword from './components/page/changePassword/ChangePassword';
import Login from './components/page/login';

//COMPONENTS - OTHERS
import About from './components/page/about';
import Terms from './components/page/terms';
import Privacy from './components/page/privacy';
import Help from './components/page/help';
import Payment from './components/page/payment';
import Delivery from './components/page/delivery';
import Return from './components/page/return';
import Faq from './components/page/faq';


//VARIABLES
import Endpoints from './config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;
const GOOGLE_AUTH_URL = Endpoints.GOOGLE_AUTH_URL;


export class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      email: '',
      cart: [],
      total: 0, 
      orderhistory: null
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemoveFromCart = this.handleRemoveFromCart.bind(this);
  }

  handleAdd (item) {
    const result = CartLocalStorageHandler.addOneToCart(this.state.cart, this.state.total, item)
    this.setState({
        cart: result.updatedCart,
        total: result.updatedTotal
      });
  }

  handleRemoveFromCart (itemKey) {
    const result = CartLocalStorageHandler.deleteByItemID(this.state.total, itemKey);
    this.setState({
      total: result.total,
      cart: result.currentCart
    });
  }

  getCurrentCart () {
    const result = CartLocalStorageHandler.getAllCartItems();
    this.setState({
      cart: result.currentCart,
      total: result.currentTotal
    })
  }

  async authenticateUser () {
    const result = await UserAuthenticator.authenticateUser();
    if (result) {
        this.setState({ 
              userName: result.name, 
              email: result.email
            })
    }
  }

  async componentDidMount() {
    this.getCurrentCart();
    await this.authenticateUser();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Switch>
              <Route exact path='/changepassword' component={ChangePassword} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/userprofile' component={UserProfile} />
              <Route exact path='/' render={()=> <Homepage handleAdd={this.handleAdd} cart={this.state.cart} total={this.state.total}/>}/>
              <Route exact path='/search' render={()=> <SearchPage handleAdd={this.handleAdd} cart={this.state.cart} total={this.state.total}/>}/>
              <Route path="/cat/:catName" render={ () => <CategoryListing handleAdd={this.handleAdd} cart={this.state.cart} total={this.state.total}/>} />
              <Route path="/cart" render={ () => <Cart cart={this.state.cart} handleRemoveFromCart={this.handleRemoveFromCart} total={this.state.total} username={this.state.userName}/>}/>
              <Route path="/checkout" render={ () => <Checkout cart={this.state.cart} total={this.state.total} userEmail={this.state.email}/>}/>
              <Route path="/prod/:bookID" render={ () => <ProductDetail handleAdd={this.handleAdd} cart={this.state.cart} total={this.state.total}/>} />
              <Route path="/orderhistory" render={ () => <OrderHistory userEmail={this.state.email} orderhistory={this.state.orderhistory}/>} />
              <Route exact path ='/about' component={About}/>
              <Route exact path='/terms' component={Terms} />
              <Route exact path='/privacy' component={Privacy} />
              <Route exact path='/help' component={Help} />
              <Route exact path ='/payment-method' component={Payment} />
              <Route exact path='/delivery' component={Delivery} />
              <Route exact path='/return' component={Return} />
              <Route exact path='/faq' component={Faq} />

            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
