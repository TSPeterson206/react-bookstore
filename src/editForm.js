import React from 'react';
import './index.css';

function EditForm ({book:{title, author, pages, price}, editBookHandler, handleChange}) {
    return (
      <div>
      <p>Edit {title} and press submit </p>
  <form onSubmit={editBookHandler}>
  <label>Title</label>
  <input type="text" onChange={handleChange} className="editTitle" name="editingId" value={this.state.editingId} placeholder={title}></input>
  <label>Author</label>
  <input type="text" onChange={handleChange} className="editAuthor" name="editingAuthor" value={this.state.edititngAuthor} placeholder={author}></input>
  <label>Pages</label>
  <input type="text" onChange={handleChange} className="editPages"name="editingPages" value={this.state.edititngPages} placeholder={pages}></input>
  <label>Price</label>
  <input number="text" onChange={handleChange} className="editPrice"name="editingPrice" value={this.state.edititngPrice} placeholder={price}></input>
  <button type="submit" >Submit</button>
</form>
</div>
    )
  }


export default EditForm