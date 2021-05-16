import React, { Component } from 'react';
import BookShelf from '../components/bookshelf/bookshelf.component';
import SearchButton from '../components/search-button.component';

class HomePage extends Component{
    render(){
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf title="Currently Reading" />
              <BookShelf title=" Want to Read" />
              <BookShelf title="Read" />
            </div>
            <SearchButton />
          </div>
        )
    }
}

export default HomePage;