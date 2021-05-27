import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import add from '../icons/add.svg'

class SearchButton extends Component{
  render(){
    return(
      <div className="open-search">
        <Link to ="/searchpage">
          <img src={add} alt=""/>
        </Link>
      </div>
      )
  }
   
}

export default SearchButton;