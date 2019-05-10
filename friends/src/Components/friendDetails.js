import React from 'react';

class FriendDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.friend.id
        }
    }
    

    deleteFriend = e => {
        e.preventDefault();
        console.log("delete friend from friend details running")
        this.props.deleteFriend(this.state.id)
    }

    render() {
        // console.log("friendDetails")
        // console.log(this)
        let id = this.props.friend.id;
        // console.log("friend id");
        // console.log(this.props.friend.id);
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