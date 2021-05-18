import React, { Component } from 'react';
import BookShelf from '../components/bookshelf/bookshelf.component';
import SearchButton from '../components/search-button.component';
import {getAll} from '../BooksAPI' ;

class HomePage extends Component{
  async componentDidMount(){
    try{
      const books = await getAll();
      this.props.attachBooks(books)
    }catch(e){
      console.log(e);
    }
  } 
  
    render(){
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf title="Currently Reading" books={this.props.currentlyReading} moveBook={this.props.moveBook}/>
              <BookShelf title=" Want to Read"   books={this.props.wantToRead} moveBook={this.props.moveBook}/>
              <BookShelf title="Read"  books={this.props.read} moveBook={this.props.moveBook}/>
            </div>
            <SearchButton />
          </div>
        )
    }
}

export default HomePage;