import React, {
  Component
} from 'react';
import './index.css';
import axios from 'axios';
import Book from './book'

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
    const id = event.target.getAttribute('name')
    const newBook = this.state.books.find(ele => {return ele.id == id})
    newBook.inCart = true;
      this.setState({
        cartItems: [...this.state.cartItems, newBook]
      })
      console.log(this.state.cartItems)
  }

  handleRemoveFromCart = (event) => {
    const id = event.target.getAttribute('name')
    const newBook = this.state.books.find(ele => {return ele.id == id})
    newBook.inCart = false;
    const index = this.state.cartItems.indexOf(newBook)
    this.state.cartItems.splice(index,1)
      // this.setState({
      //   cartItems: this.state.cartItems.splice(index,1)
      // })
      console.log(this.state.cartItems)
  }

  render() {
    return ( <div>
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
    )
  }
}

export default BookList