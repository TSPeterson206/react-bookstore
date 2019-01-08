import React, { Component } from 'react'
import './index.css';
import BookList from './bookList'

class CheckoutCart extends Component {
  constructor(props) {
    super(props)
  }

  populateCart =() => {
    const cart = this.props.cartItems.map(ele => {
      return <div>{ele.title} - ${ele.price}</div>
    })
    return cart
  }

  calculateTotal = () => {

    const total = this.props.cartItems.map(ele => {
      return parseInt(ele.price)
    })
    return total.reduce((a, b) => {return a + b},0)
  }

render(){
  return(
  <div>
  <h2 className="header">CHECKOUT CART</h2>
<div className="cartEntry">{this.populateCart()}</div>
<h5 className="total">Total: ${this.calculateTotal()}</h5>
  </div>
  )
}
}
export default CheckoutCart