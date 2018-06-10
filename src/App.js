import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import characters from "./characters.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters,
    clicked: false,
    count: 0
  };

  sortCharacters = characters => {
    let charactersSorted = this.state.characters.sort( (a,b) => {return 0.5 - Math.random()});
    characters = charactersSorted;
    this.setState({ characters });
  };

  updateScore = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleClicked = id => {
    // 1. check state of friend that is clicked
    // 2. if state clicked=false set to true
    // 3. if state clicked=true, end the game
   
    this.state.characters.map(item => {
      // grab ID of current item
      let currentId = item.id;

      // compare current item with the clicked item id
      if (currentId === id) {
        // set clicked to true
        this.setState({ clicked: true})
      }
    });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
        <div className='App'>
          <Nav />
          <Jumbotron />
            <div className='container'>
              <div className='row'>
                {this.state.characters.map(character => (
                  <FriendCard
                    sortCharacters={this.sortCharacters}
                    id={character.id}
                    key={character.key}
                    name={character.name}
                    image={character.image}
                  />
                ))}
              </div>
            </div>
          <Footer />
        </div>
    );
  }
}

export default App;
