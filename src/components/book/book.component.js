import React from 'react';
import {update} from '../../BooksAPI';

const Book=(props)=>{
  async function handleChange(e){
    try{
      const shelf= e.target.value;
      const book= props;
      const result= await update(book, shelf);
      props.moveBook(book, shelf, result);
    }catch(e){
      console.log(e)
    }
  }
  return(
    <li>
      <div className="book">
      <div className="book-top">
      <div className="book-cover" 
        style={{
          width: 128, 
          height: 193, 
          backgroundImage: `url(${props.imageLinks? props.imageLinks.thumbnail : "" })` 
        }}
      />
      <div className="book-shelf-changer">
        <select onChange={handleChange} value={props.shelf}>
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want To Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
      </div>
      <div className="book-title"> {props.title}</div>
      <div className="book-authors">{props.authors? props.authors[0] : "Does not have an Author"}</div>
      </div>
    </li>
  )
}
export default Book