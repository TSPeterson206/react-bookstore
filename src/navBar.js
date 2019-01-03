import React, { Component } from 'react'
import './index.css';
import axios from 'axios';

class NavBar extends Component {
  constructor(props) {
    super(props)
  
  this.state = {
    books:[]
  }
  }

  componentDidMount() {
    this.getBooks()
  }

  getBooks = () => {
    axios.get('http://localhost:8082/api/books')
    .then(response => {
    this.setState({books: response.data})}
    )
  }

filterTitle = (event) => {
  event.preventDefault();
const filtitle = this.state.books.map(ele => {return ele.title})
console.log(filtitle)
this.setState({books:filtitle})
}

filterAuthor = (event) => {
  event.preventDefault();
const filtauthor = this.state.books.map(ele => {return ele.author})
console.log(filtauthor)
this.setState({books:filtauthor})
}

render (){
  return (
    <nav className="navbar navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Welcome to the React Bookstore!</a>
  <form onSubmit={this.filterTitle}>
      <input type="text" placeholder="Search By Title.." name="search"></input>
      <button type="submit"></button>
    </form>  
    <form onSubmit={this.filterAuthor}>
      <input type="text" placeholder="Search By Author.." name="search"></input>
      <button type="submit"><i className="fa fa-search"></i></button>
    </form>
  <select>
    <option>Filter By...</option>
    <option onSelect={this.filterTitle}>Titles Only</option>
    <option onSelect={this.filterAuthor}>Authors Only</option>
  </select>
  <select>
    <option>Filter By Title</option>
  {
          this.state.books.map(ele => {
            return <option value={ele.id}>{ele.title}</option>
          })
        }
  </select>
  <select>
  <option>Filter By Author</option>
  {
          this.state.books.map(ele => {
            return <option value={ele.id}>{ele.author}</option>
          })
        }
  </select>
</nav>
  )
}
}
export default NavBar