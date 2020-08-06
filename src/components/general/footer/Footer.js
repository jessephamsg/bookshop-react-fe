//DEPENDENCIES
import React, {Component} from 'react';

//COMPONENTS
import CompanyInfo from './CompanyInfo';
import SupportInfo from './SupportInfo';
import FollowUs from './FollowUs';
import Subscribe from './Subscribe';

export class Footer extends Component {
    render () {
        return (
            <div>
                <CompanyInfo />
                <SupportInfo />
                <FollowUs />
                <Subscribe />
            </div>
        )
    }
}

export default Footer;