import React, {
  Component
} from 'react';
// import './index.css';

class AddForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      id:'',
      title:'',
      author:'',
      pages:'',
      price:'',
      book:this.props.book
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
event.preventDefault();
this.props.addBookHandler(this.state.title, this.state.author, this.state.pages, this.state.price)
    this.setState({
      book:''
    })
  }
  

  render () {
    return (
      <div>
  {this.props.book ? <form className="addForm">
  <p>Add Book</p>
  <label>Title</label><br></br>
  <input type="text" onChange={this.handleChange} className="addTitle editAddField" name="title" value={this.state.title}></input><br></br>
  <label>Author</label><br></br>
  <input type="text" onChange={this.handleChange} className="addAuthor editAddField" name="author" value={this.state.author}></input><br></br>
  <label>Pages</label><br></br>
  <input type="text" onChange={this.handleChange} className="addPages editAddField" name="pages" value={this.state.pages}></input><br></br>
  <img onClick={this.handleSubmit}src="https://img.icons8.com/wired/64/000000/submit-progress.png"/>
  
</form> : null}
</div>
    )
  }
}

export default AddForm