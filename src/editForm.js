// // import React from 'react';
// // import './index.css';

// // function EditForm ({book:{title, author, pages, price}, editBookHandler, handleChange}) {
// //     return (
// //       <div>
// //       <p>Edit {title} and press submit </p>
// //   <form onSubmit={editBookHandler}>
// //   <label>Title</label>
// //   <input type="text" onChange={handleChange} className="editTitle" name="editingId" value={this.state.editingId} placeholder={title}></input>
// //   <label>Author</label>
// //   <input type="text" onChange={handleChange} className="editAuthor" name="editingAuthor" value={this.state.edititngAuthor} placeholder={author}></input>
// //   <label>Pages</label>
// //   <input type="text" onChange={handleChange} className="editPages"name="editingPages" value={this.state.edititngPages} placeholder={pages}></input>
// //   <label>Price</label>
// //   <input number="text" onChange={handleChange} className="editPrice"name="editingPrice" value={this.state.edititngPrice} placeholder={price}></input>
// //   <button type="submit" >Submit</button>
// // </form>
// // </div>
// //     )
// //   }


// export default EditForm

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

  

  render () {
    return (
      <div>
      <p>Edit {this.props.id} and press submit </p>
  <form onSubmit={this.props.editBookHandler}>
  <label>Title</label>
  <input type="text" onChange={this.handleChange} className="editTitle" name="title" value={this.state.title} placeholder={this.state.title}></input>
  <label>Author</label>
  <input type="text" onChange={this.handleChange} className="editAuthor" name="author" value={this.state.author} placeholder={this.props.author}></input>
  <label>Pages</label>
  <input type="text" onChange={this.handleChange} className="editPages"name="pages" value={this.state.pages} placeholder={this.props.pages}></input>
  <label>Price</label>
  <input number="text" onChange={this.handleChange} className="editPrice"name="price" value={this.state.price} placeholder={this.props.price}></input>
  <button type="submit" >Submit</button>
</form>
</div>
    )
  }
}

export default EditForm