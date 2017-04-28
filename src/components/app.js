import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';
import NavBar from '../components/navbar'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <BookDetail />
        <BookList />
      </div>
    );
  }
}
