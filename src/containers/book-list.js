/**
 * Created by user on 4/28/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {

    renderList() {
        return this.props.books.map((book) => {

            return (
                <li onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className="collection-item">
                    {book.title}
                </li>
            )

        });
    }

    render() {

        return(

            <ul className="collection">
                {this.renderList()}
            </ul>

        )

    }

}

function mapStateToProps(state) {

    //Whatever is returned from here shows up as props in book list

    //Glue between React and Redux

    return {
       books: state.books
    };

}


//Anything returned from this function will end up as props on the book list container
function mapDispatchToProps(dispatch) {
    //Whenever select book is called the result should be passed to all of our reducers.
    return bindActionCreators({ selectBook: selectBook}, dispatch);
}

// Promote Booklist from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
