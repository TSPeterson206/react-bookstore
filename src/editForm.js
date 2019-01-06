import React from 'react';
import './index.css';

function EditForm ({book:{title, author, pages, price}, editBookHandler}) {
    return (
      <div>
      <p>Edit {title} and press submit </p>
  <form>
  <label>Title</label>
  <input type="text" className="editTitle" placeholder={title}></input>
  <label>Author</label>
  <input type="text" className="editAuthor" placeholder={author}></input>
  <label>Pages</label>
  <input type="text" className="editPages" placeholder={pages}></input>
  <label>Price</label>
  <input number="text" className="editPrice" placeholder={price}></input>
  <button type="submit" onSubmit={editBookHandler}>Submit</button>
</form>
</div>
    )
  }


export default EditForm