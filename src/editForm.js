import React, {
  Component
} from 'react';
import './index.css';

class EditForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id:this.props.book.id,
      title:this.props.book.title,
      author:this.props.book.author,
      pages:this.props.book.pages,
      price:this.props.book.price
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
this.props.editBookHandler(this.state.title, this.state.author, this.state.pages, this.state.price)
  }
  

  render () {
    return (
      <div>
      <p>Edit {this.props.id} and press submit </p>
  <form onSubmit={this.handleSubmit}>
  <label>Title</label><br></br>
  <input type="text" onChange={this.handleChange} className="editTitle" name="title" value={this.state.title} placeholder={this.state.title}></input>
  <label>Author</label><br></br>
  <input type="text" onChange={this.handleChange} className="editAuthor" name="author" value={this.state.author} placeholder={this.props.author}></input>
  <label>Pages</label><br></br>
  <input type="text" onChange={this.handleChange} className="editPages"name="pages" value={this.state.pages} placeholder={this.props.pages}></input>
  <label>Price</label><br></br>
  <input type="number" onChange={this.handleChange} className="editPrice"name="price" value={this.state.price} placeholder={this.props.price}></input>
  <button type="submit" >Submit</button>
</form>
</div>
    )
  }
}

export default EditForm