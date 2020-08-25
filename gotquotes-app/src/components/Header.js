import React, { Component } from "react";
import {Link} from 'react-router-dom'; 
import "../App.css";
//Header Compoenent will comntain a random list of names from the Serie avaliable
//to display their data on the API by selecting and hitting the search button.
class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters:[],
      path:""
    };
  }
  //getPath builds the path to display data from the selected character
  getPath = (e) =>{
    e.preventDefault();
    if(e.target.value!=="names"){
      let name = (e.target.value.substring(0,e.target.value.indexOf(" "))!==""?e.target.value.substring(0,e.target.value.indexOf(" ")):e.target.value);
      console.log(name)
      this.setState({
        path: `/character/${name.toLowerCase()}`
      })
    }else{
      this.setState({
        path: "/"
      })
    }
  }
  //change is a wildcard that changes status to trigger re-rendering 
  //over all the components when needed, specially when a another character is seleced.
  change = () =>{
    if(this.state.path!=="/")
      this.props.changeCharacter(true);
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
          <select onChange={this.getPath}>
            <option value="names"></option>
              {this.props.allNames.map((name,idx) =>{
        return(<option key={idx} value={name}>{name}</option>);
              })} 
          </select>
          <Link to={this.state.path} onClick={this.change}> Search </Link>
        </div>
      </div>
    );
  }
}

export default Header;
