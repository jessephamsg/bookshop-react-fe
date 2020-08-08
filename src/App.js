//DEPENDENCIES
import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Homepage from './components/page/home';
import Register from './components/page/register';
import ChangePassword from './components/page/changePassword/ChangePassword';
import Login from './components/page/login';
import SearchPage from './components/page/search';
import UserProfile from './components/page/userProfile/UserProfile'
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

//MAIN
export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null,
      email: '',
      cart: []
    }
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd (item) {
    this.setState({
      cart: [item, ...this.state.cart]
    });
    if(this.state.cart.length===1) {
      window.localStorage.setItem('cart', JSON.stringify([item]));
    } else {
      const currentCart = JSON.parse(window.localStorage.getItem('cart'));
      currentCart.push(item);
      window.localStorage.setItem('cart', JSON.stringify(currentCart)); 
    }
  }
  getCurrentCart () {
    const currentCart = JSON.parse(window.localStorage.getItem('cart'));
    this.setState({
      cart: currentCart
    })
  }
  async authenticateUser () {
    try {
      const data = JSON.parse(sessionStorage.getItem('userData'));
      const response = await axios.get(`${REACT_APP_SERVER_URL}/user`, { withCredentials: true })
      console.log(response)
      if (data) {
        const res = await axios.post(`${GOOGLE_AUTH_URL}/googleauth`, data)
        console.log(res.data.data.email)
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
              <Route exact path ='/userprofile' component={UserProfile} />
              <Route exact path='/changepassword' component={ChangePassword} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/' render={()=> <Homepage handleAdd={this.handleAdd} cart={this.state.cart} />}/>
              {/* <Route exact path='/search' component={SearchPage} /> */}
              {/* <Route exact path='/' component={Homepage} /> */}
              <Route exact path='/search' render={()=> <SearchPage handleAdd={this.handleAdd} cart={this.state.cart}/>}/>
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
