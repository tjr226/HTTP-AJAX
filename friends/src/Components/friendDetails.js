import React from 'react';

class FriendDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.friend.id
        }
    }

    deleteFriend = e => {
        // console.log(e, "event");
        e.preventDefault();
        let id = `${this.state.id}`
        // console.log("delete friend from friend details running");
        // console.log(id);
        this.props.deleteFriend(id)
    }

    render() {
        // console.log("friendDetails")
        // console.log(this)
        // let id = this.props.friend.id;
        // console.log("friend id");
        // console.log(this.props.friend.id);
        return (
            <div>
                {this.props.friend.name}, {this.props.friend.age}, {this.props.friend.email}
                
                <form onSubmit={this.deleteFriend}>
                    <button type="submit">Delete friend</button>
                </form>
            </div>
        )
    }
}


export default FriendDetails