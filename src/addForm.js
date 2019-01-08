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
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
event.preventDefault();
this.props.addBookHandler(this.state.title, this.state.author, this.state.pages)
  }
  

  render () {
    return (
      <div>
  <form className="addForm" onSubmit={this.handleSubmit}>
  <p>Add Book and press submit </p>
  <label>Title</label><br></br>
  <input type="text" onChange={this.handleChange} className="addTitle" name="title" value={this.state.title}></input><br></br>
  <label>Author</label><br></br>
  <input type="text" onChange={this.handleChange} className="addAuthor" name="author" value={this.state.author}></input><br></br>
  <label>Pages</label><br></br>
  <input type="text" onChange={this.handleChange} className="addPages"name="pages" value={this.state.pages}></input><br></br>
  <button type="submit" >Submit</button>
</form>
</div>
    )
  }
}

export default AddForm