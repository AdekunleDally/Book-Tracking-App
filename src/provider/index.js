import React, {Component} from 'react';

export const IndexContext= React.createContext();

class Index extends Component{
  constructor(){
    super();

    this.state={
      read:[],
      wantToRead: [],
      currentlyReading:[],
      books:[],

      attachBooks: books =>{
                  const currentlyReading = books.filter(book =>book.shelf=== "currentlyReading");
                  const wantToRead = books.filter(book =>book.shelf === "wantToRead");
                  const read = books.filter(book =>book.shelf === "read");
                  this.setState({books, read, wantToRead, currentlyReading})
                },
      moveBook: (book, extraShelf, allShelves)=>{
        console.log(extraShelf)
        const extraBooks=this.state.books.map(allBooks=>{
          const discoveredID= allShelves[extraShelf].find(
            bookID=> allBooks.id===bookID
          );
          if(discoveredID){
            allBooks.shelf = extraShelf 
          } 
          return allBooks
        });
        this.state.attachBooks(extraBooks);
      }
    }
  }
  render(){
    return(
      <IndexContext.Provider value={{...this.state}}>
        {this.props.children}
      </IndexContext.Provider>
    )
  }
}
export default Index;