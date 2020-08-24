import React, {Component} from 'react';

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