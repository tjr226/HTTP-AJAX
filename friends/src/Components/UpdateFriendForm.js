import React from 'react';

class UpdateFriendForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friendInput: {
                name: '',
                age: '',
                email: '',
            }
        }
    }

    handleChange = e => {
        // console.log(this.state.friendInput);
        this.setState({
            friendInput: {
                ...this.state.friendInput,
                [e.target.name]: e.target.value
            }
        });
    };

    updateFriend = e => {
        e.preventDefault();
        this.props.putFriend(this.state.friendInput);

    };

    render() {
        return (
            <div className="friendInputForm">
                <h2>Update friend</h2>
                <form onSubmit={this.postFriend}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={this.handleChange}
                        value={this.state.friendInput.name}
                    />
                    <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        onChange={this.handleChange}
                        value={this.state.friendInput.age}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.friendInput.email}
                    />
                    <button type="submit">
                        POST friend
                    </button>
                </form>
            </div>
        )
    }

}

export default UpdateFriendForm