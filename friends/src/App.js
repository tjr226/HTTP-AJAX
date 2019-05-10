import React from 'react';
import './App.css';
import Axios from 'axios';
import FriendDetails from './Components/friendDetails';
import PostFriendForm from './Components/PostFriendForm';

class App extends React.Component{
  constructor(props) {
    super(props);
  
  this.state = {
    friends: []
  };
  }

  componentDidMount() {
    // console.log('inside cdm')
    Axios.get('http://localhost:5000/friends')
      .then(res => {
          // console.log(res.data);
          // console.log('inside cdm then');
          this.setState(() => ({ friends: res.data }));
        })
      .catch(err => console.log(err));
    // console.log('below fetch');
  }

  postFriend = friend => {
    Axios
    .post("http://localhost:5000/friends", friend)
  }

  deleteFriend = id => {
    Axios
    .delete(`http://localhost:5000/friends/:${id}`)
    // .then(res => console.log(res))
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.friends.map(friend => <FriendDetails key={friend.id} friend={friend} deleteFriend={this.deleteFriend} /> )}
        <PostFriendForm postFriend={this.postFriend} />
      </div>
    )
  }
}

export default App;
