import React, {
  Component
} from 'react'
import './index.css';

class CheckoutCart extends Component {
  // constructor(props) {
  //   super(props)
  // }

  populateCart = () => {
    const cart = this.props.cartItems.map((ele) => {
      return <div key={ele.id}> {
        ele.title
      } - $ {
        ele.price
      } </div>
    })
    return cart
  }

  calculateTotal = () => {
    const total = this.props.cartItems.map(ele => {
      return parseInt(ele.price)
    })
    return total.reduce((a, b) => {
      return a + b
    }, 0)
  }

  render(){
    return(
    <div>
      <h2 className="header">CHECKOUT CART</h2>
      <span onClick={this.props.handleClearCart}><img className="formClose"  alt='formCloseImage' src="https://img.icons8.com/wired/24/000000/cancel.png"/></span><br></br>
    <div className="cartEntry">{this.populateCart()}</div>
      <hr />
      <h5 className="total">Total: ${this.calculateTotal()}</h5>
    </div>
      )
    }
  }
  export default CheckoutCart