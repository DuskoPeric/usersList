import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchText: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(json => this.setState({ users: json }));
  }
  render() {
    const handleSearch = e => {
      this.setState({ searchText: e.target.value });
    };
    const filteredUsers = this.state.users.filter(
      user =>
        user.name
          .toLowerCase()
          .includes(this.state.searchText.toLocaleLowerCase()) ||
        user.username
          .toLowerCase()
          .includes(this.state.searchText.toLocaleLowerCase())
    );
    return (
      <div className="App">
        <div className="header">
          <div className="title-holder">
            <h1>List of Users</h1>
            <p>Total users: {this.state.users.length}</p>
          </div>
          <Search handleSearch={handleSearch} placeholder="Search" />
        </div>

        <CardList users={filteredUsers} />
      </div>
    );
  }
}

export default App;
