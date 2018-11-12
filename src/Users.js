import React from 'react';
import Vote from './Vote'
import './App.css'

class Users extends React.Component {
 constructor(props){
     super(props);
     this.componentDidMount = this.componentDidMount.bind(this);

     //default state:
     this.state = {
         users: []
     }
 }
componentDidMount(){
     fetch('https://randomuser.me/api')
         .then( res => res.json())
         .then(
             //change the users with setState function:
             json => {
             this.setState({
                 //call the main array with the name of "results"
                 users:json.results
             })
         })
}
  render(){
      return(
          <div className='userBox'>
              <tbody>
              {this.state.users.map(item =>(
                  <tr>
                    <td><img src={item.picture.thumbnail}/></td>
                    <td>name:{item.name.first}</td>
                    <td>lastname:{item.name.last}</td>
                    <td>password:{item.login.password}</td>
                    <td>gender:{item.gender}</td>
                    <td>
                        <Vote />
                    </td>
                  </tr>
              ))}
              </tbody>
          </div>
      )
  }
}

export default Users;