import React from 'react';  
import AppBar from '@material-ui/core/AppBar';  
import Toolbar from '@material-ui/core/Toolbar';  
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import SearchBox from './SearchBox';
import styles from './styles.module.css';

const LOGO_URL = 'https://www.pngkit.com/png/full/381-3812397_a-graphical-icon-of-a-stack-of-books.png';
const useStyles = makeStyles({
    root: {
      background: 'rgb(73,58,77)',
      border: 0,
      color: 'white',
      boxShadow: 'none',
    }
  });

  
export default function SearchNav (props) {  
    const classes = useStyles();  
        return (  
            <React.Fragment>  
                <AppBar position="static" className={classes.root} >  
                    <Toolbar>
                        <div id={styles.logo}>
                         <img src={`${LOGO_URL}`} alt='logo'/>
                        </div>
                        <div id={styles.logoText}>
                         <span className={styles.iconText}>React Bookstore</span>
                        </div>
                        <div id={styles.searchComponent}>
                            <div id={styles.searchIcon}>
                                <SearchIcon />
                            </div>
                            <SearchBox handleSearchSubmit = {props.handleSearchSubmit}/>
                        </div>
                    </Toolbar>  
                </AppBar>     
            </React.Fragment>  
        )  
}  

  