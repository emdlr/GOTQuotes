import "./App.css";
import React, { Route, Component } from "react";
import axios from "axios";
import QuoteList from "./components/QuoteList";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allAPIData: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(
        // "https://game-of-thrones-quotes.herokuapp.com/v1/random",
        "https://game-of-thrones-quotes.herokuapp.com/v1/random/9",
        // "https://game-of-thrones-quotes.herokuapp.com/v1/characters",
        // "https://gameofthronesquotes.xyz/",

        // "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=pizza/",
        // "https://api.giphy.com/v1/gifs/search?api_key=Hrvht7esx5VuAneCKQ6apeDDwy5kD9ZT&q=${userInput}",
        // "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=7K1lMY96eMDJ7GsheuvqeW4NwdKvRuHBFpiJY2eV&q=${https://www.nps.gov/afam/index.htm}",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((response) => {
        // let quote = Object.keys(response.data[1].sentence);
        // console.log("quote is", quote);

        this.setState({
          allAPIData: response.data,
        });
        console.log(this.state.allAPIData);
      });
  };

  render() {
    return (
      <div>
        <Header allAPIData={this.state.allAPIData} />
        <QuoteList allAPIData={this.state.allAPIData} />

        {/* <Results allproducts={this.props.data} /> */}
      </div>
    );
  }
}

export default App;

// axios.post("https://api.infermedica.com/v2", data)
//       .then(res => console.log(res))
//       .catch(err => console.log(err));
//   };
