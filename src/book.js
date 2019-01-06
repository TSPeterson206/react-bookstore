import React from 'react';

function Book ({id, title, author, pages, price, handleEditButton, handleAddToCart, handleRemoveFromCart, handleDelete, inCart=false}) {

return (
<div>
  <p>
    <span>Title: {title}</span><br></br>
    <span>Author: {author}</span><br></br>
    <span>Pages: {pages}</span><br></br>
    <span>Price: {price}</span>
  </p>
  <button className="addButton" onClick={() => handleAddToCart(id)}>Add To Cart</button>
  <button className="removeButton" onClick={() => handleRemoveFromCart(id)}>Remove From Cart</button>
  <button className="editButton" onClick={() => handleEditButton(id)}>Edit Book</button>
  <button className="deleteButton" onClick={() => handleDelete(id)}>Delete Book</button>
</div>
    )
  }

export default Book