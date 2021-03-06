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

export class Privacy extends Component {
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
                <Icons handleLogout = {this.handleLogout}/>
                <div className={layout.pageContainer}>
                    <div className={layout.pageTitle}>Privacy Policy</div>
                    <h3>What Personal Information we collect</h3>
                    <p>
                        We collect your personal information in order to provide and continually improve the Book Depository Services. The types of information we gather include:
                        Information you give us: we receive and store information you provide us when you use the Book Depository Services. For example, your name and address, purchases you make, payment details, competition entries, survey responses, reviews and messages you send us.
                        Automatic information: we automatically receive and store certain types of information when you use Book Depository Services, including information about how you've used the site and what services you've interacted with. Like many websites, we use "cookies" and other unique identifiers, and we obtain certain types of information when your device accesses our website or other content served on our behalf on other websites (see below: “What about cookies?”).
                        Information from other sources: we might receive information about you from other sources. For example, we may receive credit history information in order to help prevent and detect fraud, or payment confirmations from payment processors.
                            </p>
                    <h3>What Personal Information we collect</h3>
                    <p>
                        We collect your personal information in order to provide and continually improve the Book Depository Services. The types of information we gather include:
                        Information you give us: we receive and store information you provide us when you use the Book Depository Services. For example, your name and address, purchases you make, payment details, competition entries, survey responses, reviews and messages you send us.
                        Automatic information: we automatically receive and store certain types of information when you use Book Depository Services, including information about how you've used the site and what services you've interacted with. Like many websites, we use "cookies" and other unique identifiers, and we obtain certain types of information when your device accesses our website or other content served on our behalf on other websites (see below: “What about cookies?”).
                        Information from other sources: we might receive information about you from other sources. For example, we may receive credit history information in order to help prevent and detect fraud, or payment confirmations from payment processors.
                            </p>
                    <h3>What Personal Information we collect</h3>
                    <p>
                        We collect your personal information in order to provide and continually improve the Book Depository Services. The types of information we gather include:
                        Information you give us: we receive and store information you provide us when you use the Book Depository Services. For example, your name and address, purchases you make, payment details, competition entries, survey responses, reviews and messages you send us.
                        Automatic information: we automatically receive and store certain types of information when you use Book Depository Services, including information about how you've used the site and what services you've interacted with. Like many websites, we use "cookies" and other unique identifiers, and we obtain certain types of information when your device accesses our website or other content served on our behalf on other websites (see below: “What about cookies?”).
                        Information from other sources: we might receive information about you from other sources. For example, we may receive credit history information in order to help prevent and detect fraud, or payment confirmations from payment processors.
                            </p>
                    <h3>What Personal Information we collect</h3>
                    <p>
                        We collect your personal information in order to provide and continually improve the Book Depository Services. The types of information we gather include:
                        Information you give us: we receive and store information you provide us when you use the Book Depository Services. For example, your name and address, purchases you make, payment details, competition entries, survey responses, reviews and messages you send us.
                        Automatic information: we automatically receive and store certain types of information when you use Book Depository Services, including information about how you've used the site and what services you've interacted with. Like many websites, we use "cookies" and other unique identifiers, and we obtain certain types of information when your device accesses our website or other content served on our behalf on other websites (see below: “What about cookies?”).
                        Information from other sources: we might receive information about you from other sources. For example, we may receive credit history information in order to help prevent and detect fraud, or payment confirmations from payment processors.
                            </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Privacy