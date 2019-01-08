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
      addingBook:null, 
      search:''
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
    const book = this.state.books.find(ele => {ele.price = 5; return ele.id === id})
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

addBookHandler = (newTitle, newAuthor, newPages) => {
const newBook = {
  title: newTitle,
  author: newAuthor,
  pages: newPages
  } 
  newBook.price = 5;
  console.log(newBook.price)
  console.log(typeof newBook.price)
axios.post('http://localhost:8082/api/books', newBook
)
.then(()=>{
  const afterAdd = [...this.state.books, newBook]
  this.setState({books:afterAdd,
  addingBook:null})
  this.getBooks()
})

}

editBookHandler = (title, author, pages) => {
const id = this.state.editingBook.id

axios.put(`http://localhost:8082/api/books/${id}`, {
title: title,
author: author,
pages: pages
}
)
.then(() => {
  this.getBooks();
  this.setState({
    editingBook:null
  })
})
}

handleChange = (event) => {
  this.setState({
    [event.target.name] : event.target.value
  })
}

filterTitleOrAuthor = () => {
const newArray = this.state.books.filter(
ele => {return ele.author.toLowerCase().includes(this.state.search.toLowerCase())
  || ele.title.toLowerCase().includes(this.state.search.toLowerCase())
}
)
if (newArray.length > 0){
this.setState({
books:newArray
})} 
else if (this.state.books.length === 0){this.getBooks()}
}

  render() {
    return ( <div className="container-fluid">
    <div className="row">
    <div className="col-2 addSearchColumn">
    <h2 className="searchAndAddHeader">Search and Add</h2>
    <button onClick={this.handleAddButton}>Add Book</button>
    <form onChange={this.filterTitleOrAuthor}>
      <input onChange={this.handleChange} type="text" className="searchBar" placeholder="Search By Title or Author..." name="search" value={this.state.search}></input>
      {/* <button type="submit">Find</button> */}
      <button type="button" onClick={this.getBooks}>Reset</button>
    </form> 

    </div>
    <div className="col-5">
      <h2 className="header"> Please Select A Book </h2>
      <div className="books">
       {
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
          price = {`$5`}
          inCart = {
            false
          }
          handleEditButton = {this.handleEditButton}
          handleDelete = {this.handleDelete}
          handleRemoveFromCart = {this.handleRemoveFromCart}
          handleAddToCart = {this.handleAddToCart}
          />
        })
      } 
      </div>
      </div>
      <div className="col-2">
      <h2 className="header">EDIT/CREATE</h2>
      <div className="row">
      {this.state.editingBook ? <EditForm book={this.state.editingBook} editBookHandler={this.editBookHandler} closeEditWindow={this.closeEditWindow}/> : null}
      </div>
      <div className="row">
      {this.state.addingBook ? <AddForm book={this.state.addingBook} addBookHandler={this.addBookHandler} closeAddWindow={this.closeAddWindow}/> : null}
      </div>
      </div>
      <div className="col-2">
      <CheckoutCart cartItems={this.state.cartItems}/>
      </div>
      </div>
      </div>
    )
  }
}

export default BookList