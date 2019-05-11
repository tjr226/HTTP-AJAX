import React from 'react';
import FriendDetails from './friendDetails';

function Home(props) {
    console.log("home props is", props)
    return (
        <div>
        {props.friends.map(friend => <FriendDetails
            key={friend.id}
            friend={friend}
            deleteFriend={props.deleteFriend}
          />)}
</div>
  )
}

export default Home