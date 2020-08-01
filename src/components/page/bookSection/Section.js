import React, {Component} from 'react';
import BookCard from '../bookCard/BookCard';

export class Section extends Component {
    constructor(props) {
        super(props)
        this.state = {
            view: this.props.data.slice(0, 6)
        } 
    }
    render() {
        return (
            <div className='bookSection'>
                <div className='bookSectionTitle'>
                    <h3>{this.props.heading}</h3>
                </div>
                <div className='bookSectionBooks'>
                    {(this.state.view).map(book => {
                        return (
                            <BookCard data={book}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Section;