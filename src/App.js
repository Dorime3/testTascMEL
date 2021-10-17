import './App.css';
import { Header, HeaderContainer } from './components/Header';
import React from 'react';
import { HeroesPageContainer } from './components/HeroesPage';

export class App extends React.Component {
  componentDidMount() {
    fetch('https://swapi.dev/api/people')
      .then(response => response.json())
  }
  render() {
    return (
      <div className="container">
        <HeaderContainer />
        {/* <Paggination /> */}
        <HeroesPageContainer />
      </div>
    );
  }
}

export default App;
