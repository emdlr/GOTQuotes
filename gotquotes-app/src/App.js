import "./App.css";
import React, { Component } from "react";
import axios from "axios";
import {Switch, Route} from 'react-router-dom'; 
import MainRandomQuote from "./components/MainRandomQuote";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.timer="";
    this.state = {
      allQuotes: [],
      mainRandomQuote:[]
    };
  }
  getMainRandomQuote = () =>{
    // if(this.timer!=="")
    //   clearInterval(this.timer);
    
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
        this.setState({
          allQuotes: response.data,
        });
      });
      this.getMainRandomQuote();
      this.timer = setInterval(this.getMainRandomQuote,7000);
  };
  render() {
    
    return (
      <div className="App">
        <Header allQuotes={this.state.allQuotes} />
        <main className ="mainContainer">
          <Switch>
            <Route exact path="/" render={(routerProps)=><MainRandomQuote {...this.state}{...routerProps}/>}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;