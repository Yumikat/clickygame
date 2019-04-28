import React, { Component } from 'react';
import CatCard from "./components/CatCard";
import cats from "./cats.json";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import "./App.css";

class App extends Component {
  state = {
    cats,
    score: 0,
    topScore: 0,
    kittenId: [],
    guess: ""
  };

  handleScore = () => {
    let newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      guess: "You guessed correctly"
    });
    if (newScore > this.state.topScore) {
      this.setState({
        topScore: newScore
      });
      if (newScore === 16) {
        alert(`Congrats, you won the game!`);
        this.setState({
          guess: "You won!!!"
        });
      }
    }
  }

  shuffle = kittenArray => {
    var i = 0, j = 0, temp = null

    for (i = kittenArray.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = kittenArray[i]
      kittenArray[i] = kittenArray[j]
      kittenArray[j] = temp
    }
    return kittenArray
  }

  kittenClicked = id => {
    if (!this.state.kittenId.includes(id)) {
      this.state.kittenId.push(id);
      console.log(this.state.kittenId);
      this.handleScore();
      this.setState({
        cats: this.shuffle(this.state.cats)
      });
    } 
    else {
      alert(`Sorry, you lose!`);
      this.setState({
        score: 0,
        kittenId: [],
        cats: this.shuffle(this.state.cats),
        guess: "You guessed incorrectly",
      });
      console.log(this.state.kittenId);
    }
  }

  render() {
    return (
      <div className="container">
        <Jumbotron
          score={this.state.score}
          topScore={this.state.topScore}
          guess={this.state.guess}
        />
        <Wrapper >
          <div className="App">
            {this.state.cats.map(cat => (
              <CatCard
                kittenClicked={this.kittenClicked}
                id={cat.id}
                key={cat.id}
                name={cat.name}
                image={cat.image}
                url={cat.url}
              />
            ))}
          </div>
        </Wrapper>
        <Footer />
      </div>
    );
  }
}

export default App;
