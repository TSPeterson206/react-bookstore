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
      pages:this.props.book.pages
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
event.preventDefault();
this.props.editBookHandler(this.state.title, this.state.author, this.state.pages)
  }
  

  render () {
    return (
      <div>
  <form className="editForm" onSubmit={this.handleSubmit}>
  <p>Edit {this.state.title} and press submit </p>
  <label>Title</label><br></br>
  <input type="text" onChange={this.handleChange} className="editTitle" name="title" value={this.state.title} placeholder={this.state.title}></input><br></br>
  <label>Author</label><br></br>
  <input type="text" onChange={this.handleChange} className="editAuthor" name="author" value={this.state.author} placeholder={this.props.author}></input><br></br>
  <label>Pages</label><br></br>
  <input type="text" onChange={this.handleChange} className="editPages"name="pages" value={this.state.pages} placeholder={this.props.pages}></input><br></br>
  <button type="submit" >Submit</button>
</form>
</div>
    )
  }
}

export default EditForm