import React, { Component } from 'react'
import BookList from './bookList'

class CheckoutCart extends Component {
  constructor(props) {
    super(props)

    this.state = {
      cartItems: []
    }
  }

  populateCart =() => {
    this.props.cartItems.map(ele => {
      return ele.title, ele.price
    })
  }
render(){
  return(
  <div>
  <h1>CHECKOUT CART</h1>
{this.populateCart}
  </div>
  )
}
}
export default CheckoutCart