import React, { Component } from 'react';
import './index.css';
import Navigation from './Navbar'
import BookList from './bookList'
import CheckoutCart from './checkoutCart';
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cartItems:[]
    }
  }
  render() {
    return (
      <div>
      <Navigation />
      <BookList />
      </div>
    );
  }
}

export default App;
