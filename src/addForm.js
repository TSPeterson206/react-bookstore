import React, {
  Component
} from 'react';

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
  
  closeAddOrEdit = () => {
    this.setState({
      book:''
    })
  }

  render () {
    return (
      <div>
  {this.state.book ? <form className="addForm">
  <div>
  <a onClick={this.props.closeAddWindow}><img className="formClose"  src="https://img.icons8.com/wired/24/000000/cancel.png"/></a><br></br>
  <span><strong>Add Book</strong></span>
  </div>
  <label>Title</label><br></br>
  <input type="text" onChange={this.handleChange} className="addTitle editAddField" name="title" value={this.state.title} required></input><br></br>
  <label>Author</label><br></br>
  <input type="text" onChange={this.handleChange} className="addAuthor editAddField" name="author" value={this.state.author} required></input><br></br>
  <label>Pages</label><br></br>
  <input type="text" onChange={this.handleChange} className="addPages editAddField" name="pages" value={this.state.pages} required></input><br></br>
  <img className="formSubmitIcon" onClick={this.handleSubmit}src="https://img.icons8.com/wired/64/000000/submit-progress.png"/>
</form> : null}
</div>
    )
  }
}

export default AddForm