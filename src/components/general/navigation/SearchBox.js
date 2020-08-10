//DEPENDENCIES
import React, {Component} from 'react';
import styles from './styles.module.css';
import btnStyles from '../../general/mainContainer/styles.button.css'; //don't delete this. It's used for button styling

export class SearchBox extends Component {

    constructor (props) {
        super (props)
        this.state = {
            searchText: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    }

    handleChange (e) {
        this.setState({
            searchText: e.target.value
        })
    }

    async handleSearchSubmit (e) {
        e.preventDefault();
        const searchValue = this.state.searchText;
        this.props.handleSearchSubmit(searchValue)
    }
    
    render () {
        return (
            <React.Fragment>
                <div id={styles.searchInput}>
                    <input id={styles.searchBox} value={this.state.searchText} onChange={this.handleChange}></input>
                </div>
                <div id={styles.searchButton}>
                    <button onClick={this.handleSearchSubmit}>Search</button>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchBox;