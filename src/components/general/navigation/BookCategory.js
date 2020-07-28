import React from 'react';
import styles from './styles.module.css';


export default function BookCategory () {
    return (
        <React.Fragment>
            <div id={styles.mainNavCategory}>Shop by category</div>
                <div className={styles.categoryNav}>
                    <li>Book category</li>
                    <li>Book category</li>
                    <li>Book category</li>
                    <li>Book category</li>
                </div>
        </React.Fragment>
    )
}