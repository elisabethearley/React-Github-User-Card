import React from "react";

class UserCard extends React.Component {
    constructor() {
        super();
        this.state = { 
            followers: [] 
        }
    }
    
    componentDidMount() {
        fetch("https://api.github.com/users/elisabethearley/followers")
        .then(response => response.json())
        .then(followers => {console.log("Followers", followers); this.setState({ followers })})
        .catch(err => console.log("Can't get followers", err));
    }

    render() {
        return (
            <div className="UserCard">
                {console.log("User", this.props.user)}
                <div className="user">
                    <a href="https//github.com/elisabethearley"><img src={this.props.user.avatar_url} alt=""></img></a>
                    <div className="userInfo">
                        <p>{this.props.user.name}</p>
                        <a href="https://twitter.com/Boomeliciously">{this.props.user.blog}</a>
                        <p>{this.props.user.bio}</p>
                    </div>
                </div>
                <div className="followers">
                    <h2>Followers</h2>
                    <p>{this.state.followers.map((item) =>
                        <p>{item.type} : {item.login}</p>)}
                    </p>
                    <h3>Total Followers</h3>
                    <p className="followersP">
                        {this.props.user.followers}
                    </p>
                </div>
            </div>
        )
    }
}

export default UserCard;