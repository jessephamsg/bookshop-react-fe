//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//COMPONENTS
import About from '../../page/about';
import Terms from '../../page/terms';
import Privacy from '../../page/privacy';
import Help from '../../page/help';


export class CompanyInfo extends Component {
    render () {
        return (
            <div>
                <h5>COMPANY</h5>
                <Router>
                    <div>
                        <Switch>
                            <Route exact path ='/about' component={About}/>
                            <Route exact path='/terms' component={Terms} />
                            <Route exact path='/privacy' component={Privacy} />
                            <Route exact path='/help' component={Help} />
                        </Switch>
                    </div>
                </Router>
            </div>
        )
    }
}

export default CompanyInfo;