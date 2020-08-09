//DEPENDENCIES
import React from 'react';  
import Home from '@material-ui/icons/Home';  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import { Notifications } from '@material-ui/icons';  
import { makeStyles } from '@material-ui/core/styles';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import AirplanemodeActiveIcon from '@material-ui/icons/AirplanemodeActive';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './styles.module.css';


const useStyles = makeStyles({
    root: {
        background: 'rgb(61,49,65)',
        border: 0,
        color: 'white',
        boxShadow: 'none',
    }
});


export default function Icons(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleClose = () => {
        setAnchorEl(null);
      };

    const classes = useStyles();
    return (
        <React.Fragment>
            <AppBar position="static" className={classes.root} >
                <Toolbar>
                    <div className={styles.generalNavLeft}>
                        <div className={styles.iconWrapper}>
                            <a href='/'><Home/></a>
                        </div>
                        <div className={styles.vl}></div>
                        <div className={styles.iconWrapper}>
                            <MailIcon />
                            <span className={styles.iconText}>Contact</span>
                        </div>
                    </div>
                    <div className={styles.generalNavMid}>
                        <div className={styles.iconWrapper}>
                            <AirplanemodeActiveIcon />
                            <span className={styles.iconText}>FREE DELIVERY WORLDWIDE</span>
                        </div>
                    </div>
                    <div className={styles.generalNavRight}>
                        <div className={styles.iconWrapper}>
                            <Notifications />
                            <span className={styles.iconText}>
                                <Button className={classes.root} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                                    Account Details
                                </Button>
                                <Menu
                                    id="simple-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem><a href='/userprofile' className={styles.dropDownLink}>Profile</a></MenuItem>
                                    <MenuItem onClick={handleClose}><a href='/orderhistory' className={styles.dropDownLink}>Order History</a></MenuItem>
                                </Menu>
                            </span>
                        </div>
                        <div className={styles.vl}></div>
                        <div className={styles.iconWrapper}>
                            <AccountCircle />
                            {
                                props.userName !== null ?
                                    <span>
                                        <button onClick={props.handleLogout} className={styles.signOutIcon}>Logout</button>
                                    </span>
                                    :
                                    <span>
                                        <a href="/login" className={styles.signInIcon}>Sign In</a>
                                    </span>
                            }
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    )
}

