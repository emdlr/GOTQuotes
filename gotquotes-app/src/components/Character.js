import React, {Component} from 'react';
import axios from 'axios';

export default class Character extends Component{
    constructor(props){
        super(props);
        this.state = {
            character:[]
        }
    }
    loadCharacter = () =>{
       axios.get(`https://game-of-thrones-quotes.herokuapp.com/v1/author/${this.props.match.params.name}/5`,
       {
           headers: {
             Accept: "application/json",
           },
         }
       ).then((response) => {
          this.setState({character:response.data});
       });  
    }
    render(){
        if(this.props.newCharacter){
            this.loadCharacter();
            this.props.changeCharacter(false);
        }
        //Still need to fill up spaces with object "this.state.character"
        return(
            <div className="characterContainer">
                <div className="chImg"><img src="" alt="(IMG)"/></div>
                <div className="characterBtns">
                    <table>
                        <tr>
                            <td><butto>Random Quote</butto></td>
                            <td><button>More Quotes</button></td>
                        </tr>
                    </table>
                </div>
                <div className="chData">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>(name)</td>
                        </tr>
                        <tr>
                            <td>House:</td>
                            <td>(House Data)</td>
                        </tr>
                    </table>
                </div>
                <div className="quotesArea">
                </div>
            </div>
        );
    }
}