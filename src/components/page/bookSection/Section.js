import React, {Component} from 'react';
import BookCard from '../bookCard/BookCard';

export class Section extends Component {
    render() {
        return (
            <div className='bookSection'>
                <div className='bookSectionTitle'>
                    <h3>{this.props.heading}</h3>
                </div>
                <div className='bookSectionBooks'>
                    {(this.props.data).map(book => {
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