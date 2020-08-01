import React, { Component } from 'react'  
import Home from '@material-ui/icons/Home';  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import { Notifications } from '@material-ui/icons';  
import { makeStyles } from '@material-ui/core/styles';
import ContactsIcon from '@material-ui/icons/Contacts';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import styles from './styles.module.css';


const useStyles = makeStyles({
    root: {
      background: 'rgb(61,49,65)',
      border: 0,
      color: 'white',
      boxShadow: 'none',
    }
  });

  
export default function Icons (props) {  
    const classes = useStyles();  
    return (  
        <React.Fragment>  
                <AppBar position="static" className={classes.root} >  
                    <Toolbar>
                        <div className={styles.generalNavLeft}>
                            <div className={styles.iconWrapper}>  
                                <Home/>
                            </div>
                            <div className={styles.vl}></div>
                            <div className={styles.iconWrapper}>   
                                <MailIcon />
                                <span className={styles.iconText}>Contact</span>
                            </div> 
                        </div>
                        <div className={styles.generalNavMid}> 
                            <div className={styles.iconWrapper}>   
                                <AirplanemodeActiveIcon/>
                                <span className={styles.iconText}>FREE DELIVERY WORLDWIDE</span>
                            </div>
                        </div>
                        <div className={styles.generalNavRight}> 
                            <div className={styles.iconWrapper}>   
                                <Notifications/>
                                <span className={styles.iconText}>Account Details</span>
                            </div>
                            <div className={styles.vl}></div>
                            <div className={styles.iconWrapper}>   
                                <AccountCircle />
                                <span> <a href="/login" className={styles.signInIcon}>Sign In</a> </span>
                            </div>
                        </div>
                    </Toolbar>  
                </AppBar>     
            </React.Fragment>  
        )  
}  

  