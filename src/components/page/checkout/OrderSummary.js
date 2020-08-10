//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';

export class OrderSummary extends Component {
    render () {
        return (
            <React.Fragment>
            <div className={styles.summaryContainer}>
                <div className={styles.summaryRow} className={styles.firstRow}>
                    <div className={styles.summaryLeftCell}>
                        <h3>Order Summary</h3>
                        <p>{this.props.order.length} items</p>
                    </div>
                    <div className={styles.summaryTotal}>
                        ${this.props.total}
                    </div>
                </div>
                {(this.props.order).map(item => {
                    return (
                        <div className={styles.summaryRow}>
                            <div className={styles.summaryLeftCell}>
                                {item.formatted.formattedTitle}
                            </div>
                            <div className={styles.summaryRightCell}>
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