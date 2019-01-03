import React from 'react';

function Book ({id, title, author, pages, price, inCart=false}) {

return (
<div>
  <p>
    <span>Title: {title}</span><br></br>
    <span>Author: {author}</span><br></br>
    <span>Pages: {pages}</span><br></br>
    <span>Price: {price}</span>
  </p>
  <button className="addButton" name={id}>Add To Cart</button>
  <button className="removeButton" name={id}>Remove From Cart</button>
</div>
    )
  }

export default Book