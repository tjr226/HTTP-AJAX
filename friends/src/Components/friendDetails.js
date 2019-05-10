import React from 'react';

const FriendDetails = props => {
    console.log(props)
    return (
        <div>
            {props.friend.name}
        </div>
    )
}

export default FriendDetails