import React from 'react';
import UserCard from "./components/UserCard";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: []
    }
  }

  componentDidMount() {
    fetch("https://api.github.com/users/elisabethearley")
      .then(response => response.json())
      .then(user => {console.log("User", user); 
        this.setState({ user })})
      .catch(err => console.log("Can't get user", err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Github User</h1>
          <UserCard user={this.state.user} />
        </header>
      </div>
    );
  }

}
export default App;
