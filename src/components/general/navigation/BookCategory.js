import React from 'react';
import styles from './styles.module.css';


export default function BookCategory () {
    return (
        <React.Fragment>
            <div id={styles.mainNavCategory}>Shop by category</div>
                <div className={styles.categoryNav}>
                    <li><a href="/cat/Fiction">Fiction</a></li>
                    <li><a href="/cat/Non-Fiction">Non-Fiction</a></li>
                    <li><a href="/cat/Children">Children</a></li>
                    <li><a href="/cat/Science">Science</a></li>
                </div>
        </React.Fragment>
    )
}