import React, { Component } from 'react';
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
  {this.props.book ? <form className="editForm">
  <span onClick={this.props.closeEditWindow}><img className="formClose" alt='formCloseImage' src="https://img.icons8.com/wired/24/000000/cancel.png"/></span><br></br>
  <p><strong>Edit "{this.state.title}"</strong></p>
  <label>Title</label><br></br>
  <input type="text" onChange={this.handleChange} className="editTitle editAddField" name="title" value={this.state.title} placeholder={this.state.title}></input><br></br>
  <label>Author</label><br></br>
  <input type="text" onChange={this.handleChange} className="editAuthor editAddField" name="author" value={this.state.author} placeholder={this.props.author}></input><br></br>
  <label>Pages</label><br></br>
  <input type="text" onChange={this.handleChange} className="editPages editAddField" name="pages" value={this.state.pages} placeholder={this.props.pages}></input><br></br>
  <img className="formSubmitIcon" alt='formSubmitImage' onClick={this.handleSubmit} src="https://img.icons8.com/wired/64/000000/submit-progress.png"/>
</form> : null}
</div>
    )
  }
}

export default EditForm