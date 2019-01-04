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
  const searchBar = document.querySelector('.searchBar')
const findIt = this.state.books.filter(ele => {return ele.author === searchBar.value})
if(!findIt) {return}
console.log(findIt)
if (findIt) {alert(
  `Match Found! There is a book by the name of ${findIt[0].title} that is written by ${searchBar.value}`)
} else {alert(`Sorry, we couldn't find any books written by ${searchBar.value}`)}
}

render (){
  return (
    <nav className="navbar navbar-dark bg-primary">
  <a className="navbar-brand" href="#">Welcome to the React Bookstore!</a>
  <form onSubmit={this.filterTitle}>
      <input type="text" className="searchBar" placeholder="Search By Title.." name="search"></input>
      <button type="submit"></button>
    </form>  
  <select>
    <option>Filter By...</option>
    <option onSelect={this.filterTitle}>Titles Only</option>
    <option onSelect={this.filterAuthor}>Authors Only</option>
  </select>
</nav>
  )
}
}
export default NavBar