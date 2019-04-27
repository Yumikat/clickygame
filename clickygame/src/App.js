import React, { Component } from 'react';
// import Images from "./images.js";
import CatCard from "./components/CatCard";
import cats from "./cats.json";
import Wrapper from "./components/Wrapper";

class App extends Component {
  state = {
    cats
  };

render() {
  return (
    <>
    <Wrapper >
    <div className="App">
      {this.state.cats.map(cat => (
        <CatCard
        id={cat.id}
        key={cat.id}
        name={cat.name}
        image={cat.image}
        url={cat.url}
        />
      ))}
    </div>
    </Wrapper>
    </>
  );
}
}

export default App;
