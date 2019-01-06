import React, {
  Component
} from 'react';
import './index.css';

class AddForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id:'',
      title:'',
      author:'',
      pages:'',
      price:''
    }
  }

  handleChange = (event) => {
    console.log(this.state.title)
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
event.preventDefault();
this.props.addBookHandler(this.state.title, this.state.author, this.state.pages, this.state.price)
  }
  

  render () {
    return (
      <div>
      <p>Add Book and press submit </p>
  <form onSubmit={this.handleSubmit}>
  <label>Title</label><br></br>
  <input type="text" onChange={this.handleChange} className="addTitle" name="title" value={this.state.title}></input>
  <label>Author</label><br></br>
  <input type="text" onChange={this.handleChange} className="addAuthor" name="author" value={this.state.author}></input>
  <label>Pages</label><br></br>
  <input type="text" onChange={this.handleChange} className="addPages"name="pages" value={this.state.pages}></input>
  <label>Price</label><br></br>
  <input type="number" onChange={this.handleChange} className="addPrice"name="price" value={this.state.price}></input>
  <button type="submit" >Submit</button>
</form>
</div>
    )
  }
}

export default AddForm