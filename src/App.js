import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './components/bookshelf/bookshelf.component';
import SearchButton from './components/search-button.component' ;
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage.component'
import SearchPage from './pages/searchpage.component'

class BooksApp extends React.Component {
  

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/searchpage' component={SearchPage} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
