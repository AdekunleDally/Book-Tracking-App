import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {search} from '../BooksAPI';
import Book from '../components/book/book.component';
import {getAll} from  '../BooksAPI' ;

class SearchPage extends Component{
  constructor(props){
    super(props);

    this.state={
      query: "",
      books:[]
    }
  }

  async componentDidMount(){
    try{
      const books = await getAll();
      this.props.attachBooks(books)
      console.log("The attach props is", this.props.attachBooks(books))
    }catch(e){
      console.log(e);
    }
  } 

  handleChange= async e =>{
    try{
      const query = e.target.value;
      this.setState({query});
     
     if(query){
     const searchResult = await search(query);
     searchResult.error ? this.setState({books:[]}) : this.setState({books:searchResult}) 
     }else{
       this.setState({books:[]})
     } 
    }catch(e){
      console.log(e)
    }
  }
    render(){
        return(
          <div className="search-books">
            <div className="search-books-bar">

            <Link className="close-search" to ="/">Close</Link>

              <div className="search-books-input-wrapper">
                
              <input type="text" placeholder="Search by title or author"  onChange={this.handleChange} value={this.state.query} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
               {this.state.books.length > 0 &&
                 this.state.books.map(book =>{
                 const discoveredShelf= this.props.books.find(
                   searchBook => searchBook.id === book.id
                    );

                  discoveredShelf ? book.shelf = discoveredShelf.shelf :   book.shelf = "none"
                 return (<Book key={book.id} {...book} moveBook={this.props.moveBook} />);
                }
                )}
                {this.state.length === 0 && <h1 style={{textAlign:"center"}}>No record found</h1>}
              </ol>
            </div>
          </div>
        )
    }
}

export default SearchPage;