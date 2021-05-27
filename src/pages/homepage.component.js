import React, { Component } from 'react';
import BookShelf from '../components/bookshelf/bookshelf.component';
import SearchButton from '../components/search-button.component';
import {getAll} from '../BooksAPI' ;

class HomePage extends Component{
  async componentDidMount(){
    try{
      const books = await getAll();
     // console.log(books)
      this.props.attachBooks(books)
      //console.log(this.props)
    }catch(e){
      console.log(e);
    }
  } 
  
    render(){
      const {currentlyReading, moveBook, wantToRead,read} = this.props
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf title="Currently Reading" books={currentlyReading} moveBook={moveBook}/>
              <BookShelf title=" Want to Read"   books={wantToRead} moveBook={moveBook}/>
              <BookShelf title="Read"  books={read} moveBook={moveBook}/>
            </div>
            <SearchButton />
          </div>
        )
    }
}

export default HomePage;