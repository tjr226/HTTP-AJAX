import React from 'react';
import './App.css';
import Axios from 'axios';
import FriendDetails from './Components/friendDetails';

class App extends React.Component{
  constructor(props) {
    super(props);
  
  this.state = {
    friends: []
  };
  }

  componentDidMount() {
    console.log('inside cdm')
    Axios.get('http://localhost:5000/friends')
      .then(res => {
          console.log(res.data);
          this.setState(() => ({ friends: res.data }));
        })
      .catch(err => console.log(err));
    console.log('below fetch');
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => <FriendDetails key={friend.id} friend={friend} /> )}
      </div>
    )
  }s
}

export default App;
