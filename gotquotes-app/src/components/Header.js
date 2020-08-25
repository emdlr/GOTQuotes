import React, { Component } from "react";
import {Link} from 'react-router-dom'; 
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      characters:[],
      path:""
    };
  }
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
