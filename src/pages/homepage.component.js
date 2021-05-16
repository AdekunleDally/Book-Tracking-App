import React, { Component } from 'react';

class HomePage extends Component{
    render(){
        return(
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <BookShelf />
            </div>
            <SearchButton  showSearchPage={this.state.showSearchPage}/>
          </div>
        )
    }
}

export default HomePage;