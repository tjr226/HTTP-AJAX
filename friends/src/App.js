import React from 'react';
import './App.css';
import Axios from 'axios';
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom';

import FriendDetails from './Components/friendDetails';
import PostFriendForm from './Components/PostFriendForm';

import Home from './Components/Home';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      friends: [],
    };
  }

  componentDidMount() {
    Axios.get('http://localhost:5000/friends')
      .then(res => {
        this.setState(() => ({ friends: res.data }));
      })
      .catch(err => console.log(err));
  }

  postFriend = friend => {
    Axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({ friends: res.data });
      })
  }

  deleteFriend = id => {
    Axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data })
      })
      .catch(err => console.log(err))
  }


  render() {
    return (
      <div className="App">
        <nav>
          <h1>Friends</h1>
          <div className="nav-links">
            <NavLink exact to="/">Home</NavLink>
            <NavLink exact to="/PostFriendForm">Add Friend</NavLink>
          </div>
        </nav>
        <Route exact path="/" render={(props) => <Home {...props} friends={this.state.friends} deleteFriend={this.deleteFriend} />} />
        <Route path="/PostFriendForm" render={(props) => <PostFriendForm {...props} postFriend={this.postFriend} /> } />
      </div>
    )
  }
}

export default App;
