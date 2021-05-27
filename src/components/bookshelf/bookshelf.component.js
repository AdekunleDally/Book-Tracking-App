import React from 'react';
import Book from '../book/book.component'

const BookShelf =({books, title, moveBook})=>{
  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          { books && books.map(book=> <Book key={book.id} {...book} moveBook={moveBook}/> )}
        </ol>
      </div>
    </div>
  )
}

export default BookShelf;