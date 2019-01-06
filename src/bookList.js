import React, {
  Component
} from 'react';
import './index.css';
import axios from 'axios';
import Book from './book'
import CheckoutCart from './checkoutCart'
import EditForm from './editForm'
import AddForm from './addForm'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      cartItems:[],
      editingBook:null,
      addingBook:null
    }
  }

// POPULATING BOOK LIST
  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    axios.get('http://localhost:8082/api/books')
      .then(response => {
        this.setState({
          books: response.data
        })
      })
  }

// ADD TO CART, REMOVE FROM CART, EDIT FORM AND DELETE FUNCTIONS

  handleAddToCart = (id) => {
    const book = this.state.books.find(ele => {return ele.id === id})
      this.setState({
        cartItems: [...this.state.cartItems, book]
      })
  }

  handleRemoveFromCart = (id) => {
    const newBook = this.state.books.find(ele => {return ele.id == id})
    const index = this.state.cartItems.indexOf(newBook)
    if(index === -1) {return}
    const updatedCart = this.state.cartItems.filter(ele => {
      return ele != newBook}
    )
      this.setState({
        cartItems: updatedCart
      })
  }


  handleAddButton = (id) => {
    this.setState({
      addingBook:{}
    })

  }


  handleEditButton = (id) => {
    const book = this.state.books.find(ele => {return ele.id == id})
    this.setState({
      editingBook:book
    })

  }

  handleDelete = (id) => {
    const newBook = this.state.books.find(ele => {return ele.id == id})
const cartAfterDelete = this.state.books.filter(ele => {
  return ele != newBook}
)
    axios.delete (`http://localhost:8082/api/books/${id}`)
    .then(() =>{
      this.setState({books:cartAfterDelete})
    })
  }

// ADD BOOK AND EDIT BOOK HANDLERS

addBookHandler = (newTitle, newAuthor, newPages, newPrice) => {
console.log(newTitle, newAuthor)

const newBook = {
  title: newTitle,
  author: newAuthor,
  pages: newPages,
  price: newPrice
  } 
  console.log(newBook)
  console.log(this.state.books)
axios.post('http://localhost:8082/api/books', newBook
)
.then(()=>{
  const afterAdd = [...this.state.books, newBook]
  this.setState({books:afterAdd})
  this.getBooks()
})

}

editBookHandler = (title, author, pages, price) => {
const id = this.state.editingBook.id
const newPrice = parseInt(price)

axios.put(`http://localhost:8082/api/books/${id}`, {
title: title,
author: author,
pages: pages,
price: newPrice
}
)
.then(() => {
  this.getBooks()
})


}
  render() {
    return ( <div className="container">
    <div className="row">
    <div className="col-6">
    <button onClick={this.handleAddButton}>Add Book</button>
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
          handleEditButton = {this.handleEditButton}
          handleDelete = {this.handleDelete}
          handleRemoveFromCart = {this.handleRemoveFromCart}
          handleAddToCart = {this.handleAddToCart}
          />
        })
      } </div>
      <div className="col-3">
      EDIT AND CREATE BAYS
      {this.state.editingBook ? <EditForm book={this.state.editingBook} editBookHandler={this.editBookHandler}/> : null}
      {this.state.addingBook ? <AddForm book={this.state.addingBook} addBookHandler={this.addBookHandler}/> : null}
      </div>
      <div className="col-3">
      <CheckoutCart cartItems={this.state.cartItems}/>
      </div>
      </div>
      </div>
    )
  }
}

export default BookList