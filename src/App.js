//DEPENDENCIES
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS - BOOKS
import Homepage from './components/page/home';
import SearchPage from './components/page/search';
import CategoryListing from './components/page/categoryListing';
import Cart from './components/page/cart';
import Checkout from './components/page/checkout';
import UserProfile from './components/page/userProfile/UserProfile'

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
      total: 0
    }
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd (item) {
    if(this.state.cart === null) {
      this.setState({
        cart: [item],
        total: item.raw.discountedPrice
      })
      window.localStorage.setItem('cart', JSON.stringify([item]));
    } else {
      this.setState({
        cart: [item, ...this.state.cart],
        total: this.state.total + item.raw.discountedPrice
      });
      if (this.state.cart.length===1) {
        window.localStorage.setItem('cart', JSON.stringify([item]));
      } else {
        const currentCart = JSON.parse(window.localStorage.getItem('cart'));
        currentCart.push(item);
        window.localStorage.setItem('cart', JSON.stringify(currentCart)); 
      }
    }
    window.localStorage.setItem('total', JSON.stringify(this.state.total));
  }

  getCurrentCart () {
    const currentCart = JSON.parse(window.localStorage.getItem('cart'));
    const currentTotal = JSON.parse(window.localStorage.getItem('total'))
    this.setState({
      cart: currentCart,
      total: currentTotal
    })
  }

  async authenticateUser () {
    try {
      const data = JSON.parse(sessionStorage.getItem('userData'));
      const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
      if (data) {
        const res = await axios.post(`${GOOGLE_AUTH_URL}/googleauth`, data)
        this.setState({ 
          userName: res.data.data.name, 
          email: res.data.data.email 
        })
      }
      else if (response.data) 
        this.setState({ 
          userName: response.data.name, 
          email: response.data.email 
        })
    } catch (err) {
      console.log(err)
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
              <Route path="/cart" render={ () => <Cart cart={this.state.cart} total={this.state.total} username={this.state.userName}/>}/>
              <Route path="/checkout" render={ () => <Checkout cart={this.state.cart} total={this.state.total} userEmail={this.state.email}/>}/>
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
