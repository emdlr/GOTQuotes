import React, { Component } from "react";
import "../App.css";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //
    };
  }

  getAllQuotes = (props) => {
    alert("hi");
    //     //   QuoteList products={this.props.allproducts} />;
    //     // const Header = (props) => {
    //     let allQuotes = props.allAPIData.map((quote, index) => {
    //       return (
    //         <div key={index}>
    //           <h3>
    //             {/* <img src={`./images/${product.image}`} /> */}
    //             <div>
    //               {quote.sentence} &nbsp; &nbsp; ${quote.character.name}{" "}
    //             </div>
    //           </h3>
    //         </div>
    //       );
    //     });
    //     return <div>{allQuotes}</div>;
  };

  render() {
    return (
      <div className="App-header">
        <h3> GotQuotes </h3>
        <input type="button" value="RandomQuotes" onClick=""></input>
        <input
          type="button"
          value="AllQuotes"
          onClick={this.getAllQuotes}
        ></input>
      </div>
    );
  }
}

export default Header;
