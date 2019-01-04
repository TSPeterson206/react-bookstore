import React, {
  Component
} from 'react';
import './index.css';
import axios from 'axios';
import Book from './book'
import CheckoutCart from './checkoutCart'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      cartItems:[]
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get('http://localhost:8082/api/books')
      .then(response => {
        this.setState({
          books: response.data
        })
        this.addEventListeners()
      })
  }

  addEventListeners = () => {
    const addButton = document.querySelectorAll('.addButton')
    const removeButton = document.querySelectorAll('.removeButton')

    addButton.forEach(item => {
      item.addEventListener('click', this.handleAddToCart)
    })
    removeButton.forEach(item => {
      item.addEventListener('click', this.handleRemoveFromCart)
    })
  }

  handleAddToCart = (event) => {
    const id = event.target.getAttribute('dataid')
    const newBook = this.state.books.find(ele => {return ele.id == id})
    newBook.inCart = true;
      this.setState({
        cartItems: [...this.state.cartItems, newBook]
      })
  }

  handleRemoveFromCart = (event) => {
    const id = event.target.getAttribute('dataid')
    const newBook = this.state.books.find(ele => {return ele.id == id})
    newBook.inCart = false;
    const index = this.state.cartItems.indexOf(newBook)
    if(index === -1) {return}
    const updatedCart = this.state.cartItems.filter(ele => {
      return ele != newBook}
    )
      this.setState({
        cartItems: updatedCart
      })
  }

  render() {
    return ( <div className="container">
    <div className="row">
    <div className="col-9">
      <h2> Please Select A Book </h2> {
        this.state.books.map(ele => {
          return <Book id = {
            ele.id
          }
          title = {
            ele.title
          }
          author = {
            ele.author
          }
          pages = {
            ele.pages
          }
          price = {
            ele.price
          }
          inCart = {
            false
          }
          />
        })
      } </div>
      <div className="col-3">
      <CheckoutCart cartItems={this.state.cartItems}/>
      </div>
      </div>
      </div>
    )
  }
}

export default BookList