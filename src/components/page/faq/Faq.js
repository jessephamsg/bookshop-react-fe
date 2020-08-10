//DEPENDENCIES
import React, { Component } from 'react';
import layout from '../../general/mainContainer/simplePageContainer.module.css';

//COMPONENTS
import Icons from '../../general/navigation/Icons';
import Footer from '../../general/footer';


export class Faq extends Component {
    render() {
        return (
            <div>
                <Icons />
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