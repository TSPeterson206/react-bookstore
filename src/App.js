import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './navBar'
import BookList from './bookList'
import CheckoutCart from './checkoutCart';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar />
      <BookList />
      <CheckoutCart />
      </div>
    );
  }
}

export default App;
