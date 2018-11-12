import React from 'react';
import './App.css';
import Users from "./Users";

class App extends React.Component {
    constructor(props){
        super(props);
        this.updateInputValue = this.updateInputValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        //default state
        this.state = {
            inputValue: '',
            value: ''
        }
    }
    updateInputValue(event){
        this.setState({
            inputValue: event.target.value
        })
    }
    handleSubmit(event){
       event.preventDefault();
       this.setState( ()=> {
        return{
        value: parseInt(this.state.inputValue)
       }
       })
    }

   render(){
        var userAray = [];
        for(var i =0; i<this.state.value; i++){
            userAray.push(
                <Users key={i}/>
            )
        }
       return(
           <div>
               <div>
                   <h4>Enter the number of users you need :</h4>
                   <input value={this.state.inputValue} onChange={this.updateInputValue}/>
                   <button className="submitButton" onClick={this.handleSubmit}>Subtmit</button>
               </div>
               <div className="headersNav">
                   <thead>
                   <th>Avatar</th>
                   <th>Username</th>
                   <th>Password</th>
                   <th>Gender</th>
                   </thead>
                   {userAray}
               </div>
           </div>
       )
   }
}

export default App;