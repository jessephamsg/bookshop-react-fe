// DEPENDENCIES
import React from 'react';
import { MenuList, MenuItem, Paper } from '@material-ui/core';
import styles from './styles.module.css';

function ProfileMenu(props) {
    return (
      <Paper className={styles.paper}>
        <MenuList>
          <MenuItem onClick={props.handleClick}><a className={styles.quickLink} href='/userprofile'>Profile</a></MenuItem>
          <div style={{display: props.localUser ? '' : 'none'}}>
          <MenuItem onClick={props.handleClick}><a className={styles.quickLink} href='/changepassword'>Change Password</a></MenuItem>
          </div>
          <MenuItem onClick={props.handleClick}><a className={styles.quickLink} href='#'>Order History</a></MenuItem>
        </MenuList>
      </Paper>
    )
}

export default ProfileMenu;