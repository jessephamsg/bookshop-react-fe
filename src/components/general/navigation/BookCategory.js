import React from 'react';
import styles from './styles.module.css';


export default function BookCategory (props) {
    return (
        <React.Fragment>
            <div id={styles.mainNavCategory}>Shop by category</div>
                <div className={styles.categoryNav}>
                    {props.categories.map(cat => {
                        return (<li><a href={`/cat/${cat}`}>{cat}</a></li>)
                    })}
                </div>
        </React.Fragment>
    )
}