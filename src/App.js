import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
//import BookShelf from './components/bookshelf/bookshelf.component';
//import SearchButton from './components/search-button.component' ;
import {Switch, Route} from 'react-router-dom';
import HomePage from './pages/homepage.component';
import SearchPage from './pages/searchpage.component';
import Provider, {IndexContext} from './provider/index';


class BooksApp extends Component {
  render() {
    return (
      <div className="app">
       <Provider>
           <Switch>
             <Route exact path="/" render={()=> (
                        <IndexContext.Consumer> 
                          {context => <HomePage { ...context} />} 
                        </IndexContext.Consumer>
                        )} />

             <Route exact path='/searchpage' render={()=> (
              <IndexContext.Consumer> 
                {context => <SearchPage { ...context} />} 
              </IndexContext.Consumer>
              )} />
           </Switch>
       </Provider> 
      </div>
    )
  }
}

export default BooksApp
