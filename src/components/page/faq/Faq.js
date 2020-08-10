//DEPENDENCIES
import React, { Component } from 'react';
import layout from '../../general/mainContainer/simplePageContainer.module.css';
import axios from 'axios';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';

//VARIABLES
import Endpoints from '../../../config/endpoints';
const REACT_APP_SERVER_URL = Endpoints.REACT_APP_SERVER_URL;

export class Faq extends Component {
    handleLogout = async (e) => {
        try {
          const response = await axios.get(`${REACT_APP_SERVER_URL}/logout`, { withCredentials: true })
          sessionStorage.removeItem('userData');
          this.props.history.push('/login')
        } catch (err) {
          console.log(err)
        }
      }
    render() {
        return (
            <div>
                <Icons handleLogout={this.handleLogout}/>
                <div className={layout.pageContainer}>
                    <div className={layout.pageTitle}>FAQs</div>
                    <h3>Q: Oops, I used the wrong address!</h3>
                    <p>A: Please call our customer services team and they can help</p>
                    <h3>Q: How do I remove something from my basket?</h3>
                    <p>A: If you click on cart (pink block with Item in Cart & Total) on header. Find the book you want to remove and click on the corresponding 'Remove' button and it will be removed from your basket.</p>
                    <h3>Q: Do you sell gift cards?</h3>
                    <p>Sorry, we don't sell gift card at the moment, please check back again in the future.</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Faq