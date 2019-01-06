import React, { Component } from 'react'
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
  <h1>CHECKOUT CART</h1>
<div>{this.populateCart()}</div>
<h4>Total: $ <div>{this.calculateTotal()}</div></h4>
  </div>
  )
}
}
export default CheckoutCart