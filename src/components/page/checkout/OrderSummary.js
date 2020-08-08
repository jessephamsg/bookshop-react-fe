import React, {Component} from 'react';
import pageStyles from './styles.module.css';


export class OrderSummary extends Component {
    render () {
        return (
            <React.Fragment>
            <div className={pageStyles.summaryContainer}>
                <div className={pageStyles.summaryRow}>
                    <div className={pageStyles.summaryLeftCell}>
                        <h3>Order Summary</h3>
                        <p>{this.props.order.length} items</p>
                    </div>
                    <div className={pageStyles.summaryRightCell}>
                        ${this.props.total}
                    </div>
                </div>
                {(this.props.order).map(item => {
                    return (
                        <div className={pageStyles.summaryRow}>
                            <div className={pageStyles.summaryLeftCell}>
                                {item.formatted.formattedTitle}
                            </div>
                            <div className={pageStyles.summaryRightCell}>
                                {item.formatted.formattedDiscountedPrice}
                            </div>
                        </div>
                    )
                })}
            </div>
            </React.Fragment>
        )
    }
}

export default OrderSummary;