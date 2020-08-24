import React, { Component } from "react";
import {Link} from 'react-router-dom'; 
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters:[]
    };
  }
  render() {
    return (
      <div className="header">
        <div className="title">
          <Link to="/">
            <p> GotQuotes </p>
          </Link>
        </div>
        <div className="doropDown">
          <select>
            <option selected></option>
              {this.props.allQuotes.map((quote,idx) =>{
        return(<option key={idx} value={quote.character.name}>{quote.character.name}</option>);
              })}
          </select>
        </div>
      </div>
    );
  }
}

export default Header;
