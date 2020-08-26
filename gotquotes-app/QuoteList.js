import React from "react";
// import "./App.css";

const QuoteList = (props) => {
  let allQuotes = props.allAPIData.map((quote, index) => {
    return (
      <div key={index}>
        <h3>
          {/* <img src={`./images/${product.image}`} /> */}
          <div>
            {quote.sentence} &nbsp; &nbsp; ${quote.character.name}{" "}
          </div>
        </h3>
      </div>
    );
  });

  return <div>{allQuotes}</div>;
};

export default QuoteList;
