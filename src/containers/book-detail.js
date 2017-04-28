/**
 * Created by user on 4/28/17.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';


class BookDetail extends Component {
    render(){
        if(!this.props.book) {
            return (
                <div className="col s12">
                    <h5>Please select a book to get started!</h5>
                </div>
            );
        }
        return (
            <div className="col s12">
                <h5>Book Detail for:</h5>
                <div className="blue">Title: {this.props.book.title}</div>
                <div className="red">Pages: {this.props.book.pages}</div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        book: state.activeBook
    };
}

export default connect(mapStateToProps)(BookDetail);