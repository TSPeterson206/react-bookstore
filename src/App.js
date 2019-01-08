import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavBar from './navBar'
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
        
      <NavBar />
      <BookList />
      </div>
    );
  }
}

export default App;
