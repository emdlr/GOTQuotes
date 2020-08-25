import React, {Component} from 'react';
import axios from 'axios';

export default class Character extends Component{
    constructor(props){
        super(props);
        this.name="";
        this.house="";
        this.quotes=[];

        this.state = {
            character:[],
            quote:"",
            view:true,
            name:""
        }
    }
    getRandomInt = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
    }
    displayRandom = (e) =>{
        e.preventDefault();
        this.setState({
            view:false,
            quote: this.quotes[this.getRandomInt(0,this.quotes.length)]
        })
    }
    displayAll = (e) =>{
        e.preventDefault();
        this.setState({
            view:true
        })
    }
    loadCharacter = () =>{
       let characterAPI =this.translateName(this.props.match.params.name);
       axios.get(`https://game-of-thrones-quotes.herokuapp.com/v1/author/${characterAPI}/5`,
       {
           headers: {
             Accept: "application/json",
           },
         }
       ).then((response) => {
          this.setState(
              {character:response.data,
                quote:""})
       }); 
    }
    translateName = (name) =>{
        let newC=name.toLowerCase();
        switch(newC){
            case "eddard":
                newC="ned";
                break;
            case "lord":
                newC="varys";
                break;
            case "petyr":
                newC="baelish";
        }
        return newC;
    }
    render(){
        if(this.props.newCharacter){
            this.loadCharacter();
            this.props.changeCharacter(false);
         }
         this.quotes=[];
         this.name="";
         this.house="";
         this.state.character.map(p =>{
            this.name=p.character.name
            this.house=p.character.house.name;
            if (typeof p ==="object"){
            this.quotes.push(p.sentence)
            }
         }) 
        return(
            <div className="characterContainer">
                <div className="chImg"><img src="" alt="(IMG)"/></div>
                <div className="characterBtns">
                    <table> 
                        <tr>
                            <td><input type="button" onClick={this.displayRandom} value="Random Quote"/></td>
                            <td><input type="button" onClick={this.displayAll} value="Display All"/></td>
                        </tr>
                    </table>
                </div>
                <div className="chData">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td>{this.name}</td>
                        </tr>
                        <tr>
                            <td>House:</td>
                            <td>{this.house}</td>
                        </tr>
                    </table>
                </div>
                <div className="quotesArea">
                    <ul>
                        {this.state.view?this.quotes.map(qt =>{return(<li>{qt}</li>)}):<li>{this.state.quote}</li>}
                    </ul>
                </div>
            </div>
        );
    }
}