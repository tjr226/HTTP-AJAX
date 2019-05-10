import React from 'react';

class FriendDetails extends React.Component {

    deleteFriend = (e, id) => {
        e.preventDefault();
        this.props.deleteFriend(id)
    }

    render() {
        console.log("friendDetails")
        console.log(this)
        let id = this.props.friend.id;
        console.log("friend id");
        console.log(this.props.friend.id);
        return (
            <div>
                {this.props.friend.name}, {this.props.friend.age}, {this.props.friend.email}
                <form onSubmit={this.props.deleteFriend(id)}>
                    <button type="submit">x</button>
                </form>
            </div>
        )
    }
}


export default FriendDetails