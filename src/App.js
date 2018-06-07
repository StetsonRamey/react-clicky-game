import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  sortCharacters = friends => {
    let friendsSorted = this.state.friends.sort( (a,b) => {return 0.5 - Math.random()});

    friends = friendsSorted;
    
    this.setState({ friends });
  }

  updateScore = score => {

  };

  resetGame = value => {

  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Header>Friends List</Header>
        {this.state.friends.map(friend => (
          <FriendCard
            sortCharacters={this.sortCharacters}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
