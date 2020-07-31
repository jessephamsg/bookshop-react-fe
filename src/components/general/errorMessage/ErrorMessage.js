import React from 'react'
import { Alert } from '@material-ui/lab';
import styles from './styles.module.css'

function Message(props) {
    return (
        <Alert className={styles.errAlert} severity="warning" onClose={() => {}}> {props.msg}
        </Alert>
    )
}

export default Message