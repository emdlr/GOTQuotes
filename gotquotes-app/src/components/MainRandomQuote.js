import React, {Component} from 'react';
//MainRandomQuote will render from a bunch of characters, different 
//rendom quotes while you stay on the home page every 6 seconds
export default class MainRandomQuote extends Component{
    render(){
        let character=[];
        let cDetail={};
        character = Object.values(this.props.mainRandomQuote);
        if(Array.isArray(character))
            if(character.length>0){
               cDetail = character[1];
            }
        return(
            <div className="mRandomQuote">
                <p>{this.props.mainRandomQuote.sentence}</p>
                <p><i>- {cDetail.name} - </i></p>
            </div>
        );
    }
}