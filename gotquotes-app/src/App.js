import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import {Switch, Route, useHistory} from 'react-router-dom'; 
import MainRandomQuote from "./components/MainRandomQuote";
import Header from "./components/Header";
import Character from "./components/Character";

class App extends Component {
  constructor(props) {
    super(props);
    this.timer="";
    this.state = {
      allNames: [],
      mainRandomQuote:[],
      allData:[],
      newCharacter:true,
      clicked:false
    };
  }
  getMainRandomQuote = () =>{
    axios.get("https://game-of-thrones-quotes.herokuapp.com/v1/random",
    {
        headers: {
          Accept: "application/json",
        },
      }
    ).then((response) => {
      this.setState({
        mainRandomQuote: response.data,
      });
    });
  }
  componentDidMount = () => {
    axios.get("https://game-of-thrones-quotes.herokuapp.com/v1/random/10",
      {
          headers: {
            Accept: "application/json",
          },
        }
      ).then((response) => {
        let names=[];
        response.data.map((obj)=>{
          if(names.length>0){
              let load=true;
              for(let i=0;i<names.length;i++)
                  if(names[i]===obj.character.name){
                      load=false;
                      break;
                  }
              if(load) names.push(obj.character.name);  
          }else names.push(obj.character.name);
        })
        this.setState({
          allNames: names,
          allData: response.data
        });
      });
      this.getMainRandomQuote();
      this.time = setInterval(this.getMainRandomQuote,7000)
  };
  changeCharacter = (value) =>{
    this.setState({
      newCharacter:value,
      clicked:!this.state.clicked
    })
  }
  render() {
    return (
      <div className="App">
        <Header allNames={this.state.allNames} selectedCharacter={this.selectedCharacter} getMainRQ={this.getMainRandomQuote} changeCharacter={this.changeCharacter} />
        <main className ="mainContainer">
          <Switch>
            <Route exact path="/" render={(routerProps)=><MainRandomQuote {...this.state}{...routerProps}/>}/>
            <Route path="/character/:name" render={(routerProps)=><Character {...this.state}changeCharacter={this.changeCharacter}{...routerProps}/>}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;