//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import Payment from '../../page/payment';
import Delivery from '../../page/delivery';
import Return from '../../page/return';
import Faq from '../../page/faq';


export class SupportInfo extends Component {
    render () {
        return (
            <div>
                <h5>SUPPORT</h5>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path ='/payment-method' component={Payment} />
                            <Route exact path='/delivery' component={Delivery} />
                            <Route exact path='/return' component={Return} />
                            <Route exact path='/faq' component={FAQ} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default SupportInfo;