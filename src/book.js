import React from 'react';

function Book ({id, title, author, pages, price, handleEditButton, handleAddToCart, handleRemoveFromCart, handleDelete, inCart=false}) {

return (
<div>
  <p className="bookInfo">
    <span><strong>Title:</strong> {title}</span><br></br>
    <span><strong>Author:</strong> {author}</span><br></br>
    <span><strong>Pages:</strong> {pages}</span><br></br>
    <span><strong>Price:</strong> {price}</span>
  </p>
  <div className="bookButtons">
  <img className="bookIcon" title="Add to Cart" onClick={() => handleAddToCart(id)} src="https://img.icons8.com/wired/64/000000/plus.png"></img>
  <img className="bookIcon" title="Remove from Cart" onClick={() => handleRemoveFromCart(id)} src="https://img.icons8.com/wired/64/000000/delete-sign.png"></img>
  <img className="bookIcon" title="Edit Book" onClick={() => handleEditButton(id)} src="https://img.icons8.com/wired/50/000000/multi-edit.png"></img>
  <img className="bookIcon" title="Delete Book" onClick={() => handleDelete(id)} src="https://img.icons8.com/wired/64/000000/trash.png"></img>
  </div>
</div>
    )
  }

export default Book