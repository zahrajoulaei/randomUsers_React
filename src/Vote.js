import React from 'react';
import './App.css';



class Vote extends React.Component {
    constructor(props) {
        super(props);
        this.increase = this.increase.bind(this);
        this.decrease = this.decrease.bind(this);
        this.state = {
           like : 0,
            dislike: 0
        }
    }

    increase(){
        this.setState((prevState)=>{
            return {
                like: prevState.like + 1
            }
        })
    }
    decrease(){
        this.setState((prevState)=>{
            return {
                dislike: prevState.dislike + 1
            }
        })
    }



  render(){
      return(
          <div>
            <button className="voteBtn" onClick={this.increase}>like {this.state.like}</button>
            <button className="voteBtn" onClick={this.decrease}>dislike {this.state.dislike}</button>
          </div>
      )
  }
}
export default Vote;