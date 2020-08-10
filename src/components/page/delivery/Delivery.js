//DEPENDENCIES
import React, { Component } from 'react';
import layout from '../../general/mainContainer/simplePageContainer.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class Delivery extends Component {
    render() {
        return (
            <div>
                <Icons />
                <div className={layout.pageContainer}>
                    <div className={layout.pageTitle}>Delivery</div>
                    <h3>How Your Local Order is Fulfilled (upon successful payment)</h3>
                    <p>For Times Rewards Members:</p>
                    <img src='https://cdn.goguru.com.sg/media/faq/FAQ-Deliver3.PNG' />
                    <p>
                        As of 1 May 2020, a standard Delivery Charge of $3.99 is applicable for any orders below $35 (inclusive of GST, discounts and promotions) for local deliveries within Singapore
                        Free delivery is applicable for any orders $35 and above (inclusive of GST, discounts & promotions).
                        Click here and join us as a member today!
                    </p>

                    <h3>For Non-Members:</h3>
                    <img src='https://cdn.goguru.com.sg/media/faq/_FAQ-Delivery2.PNG' />
                    <p>
                        Physical products are delivered by our third party logistic contractors. All such orders (except subscription/customisable products) will be delivered within 5 working days upon stock availability confirmation.
                        *Due to recent Covid-19 measure, estimated delivery times has been delayed.
                        Delivery rates are based on weight and dimensions. You will be able to view the final delivery rate before payment at the shopping cart checkout.
                    </p>

                    <h3>International Delivery</h3>
                    <p>
                        Overseas international delivery is available for the following countries (zones in bracket):
                        Australia (3), Austria (6), Bangladesh (4), Belgium (6), Brazil (8), Brunei (2), Bulgaria (6), Cambodia (4), Canada (5), China (7), Colombia (8), Costa Rica (8), Croatia (6), Cyprus (6), Czech Republic (6), Denmark (6), Finland (6), France (6), Germany (6), Greece (6), Hong Kong SAR China (2), Hungary (6), India (3), Indonesia (2), Ireland (6), Israel (7), Italy (6), Japan (3), Laos (4), Liechtenstein (6), Lithuania (6), Luxembourg (6), Macau SAR China (2), Malaysia (1), Maldives (4), Mauritius (8), Mexico (5), Monaco (6), Morocco (8), Myanmar (Burma) (4), Netherlands (6), New Zealand (3), Norway (6), Philippines (2), Poland (6), Portugal (6), Puerto Rico (8), Qatar (7), Saudi Arabia (7), South Africa (7), South Korea (2), Spain (6), Sri Lanka (4), Sweden (6), Switzerland (6), Taiwan (2), Thailand (2), Turkey (7), Ukraine (8), United Arab Emirates (7), United Kingdom (6), United States (5), Venezuela (8), Vietnam (2)
                        </p>
                    <p>
                        Delivery rates are based on weight, dimensions and the region the items are being shipped to. You will be able to view the final delivery rate before payment at the shopping cart checkout.
                        </p>
                    <p>
                        Your order typically reaches you within 2 weeks, as long as there are no customs or local delays. In some cases, you may receive it much earlier.
                        Please contact us if you require more information.
                    </p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Delivery