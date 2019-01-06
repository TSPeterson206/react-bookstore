import React, {
  Component
} from 'react';
import './index.css';
import axios from 'axios';
import Book from './book'
import CheckoutCart from './checkoutCart'
import EditForm from './editForm'

class BookList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      cartItems:[],
      editingBook:null
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
    const addToCartButton = document.querySelectorAll('.addButton')
    // const removeFromCartButton = document.querySelectorAll('.removeButton')
    // const editButton = document.querySelectorAll('.editButton')
    // const deleteButton = document.querySelectorAll('.deleteButton')


    addToCartButton.forEach(item => {
      item.addEventListener('click', this.handleAddToCart)
    })
    // removeFromCartButton.forEach(item => {
    //   item.addEventListener('click', this.handleRemoveFromCart)
    // })
    // editButton.forEach(item => {
    //   item.addEventListener('click', this.generateEditForm)
    //   })
    // deleteButton.forEach(item => {
    //   item.addEventListener('click', this.handleDelete)
    // })
  }

  handleAddToCart = (id) => {
    console.log(id)
    console.log(this.state.books)
    const book = this.state.books.find(ele => {console.log(ele.id); return ele.id === id})
    console.log(book)
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
      // this.setState({
      //   cartItems: updatedCart
      // })
  }

  handleEditButton = (id) => {
    const book = this.state.books.find(ele => {return ele.id == id})
    this.setState({
      editingBook:book
    })

  }

  addBookHandler = () => {
    // const newBook = {
    //   title: editTitle.value,
    //   author: editAuthor.value,
    //   pages: editPages.value,
    //   price: editPrice.value
    // }
  }

  editBookHandler = (event) => {
    event.preventDefault();
const editTitle = document.querySelector('.addTitle')
const editAuthor = document.querySelector('.addAuthor')
const editPages = document.querySelector('.addPages')
const editPrice = document.querySelector('.addPrice')

const id = event.target.getAttribute('dataid')
axios.put(`http://localhost:8082/api/books/${id}`, {
  title: editTitle.value,
  author: editAuthor.value,
  pages: editPages.value,
  price: editPrice.value
}
)
}

  handleDelete = (id) => {
    console.log(id)
    // const id = event.target.getAttribute('dataid')
    const newBook = this.state.books.find(ele => {return ele.id == id})
const cartAfterDelete = this.state.books.filter(ele => {
  return ele != newBook}
)
    axios.delete (`http://localhost:8082/api/books/${id}`)
    .then(() =>{
      this.setState({books:cartAfterDelete})
    })
  }

  render() {
    return ( <div className="container">
    <div className="row">
    <div className="col-6">
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