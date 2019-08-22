import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './App.css';
import Banner from './Banner'
import GuessButton from './RandomButtons';
import Flag from './Flag';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      currentFlag: "",
      correctCountry: "loading",
      incorrectCountries: ["loading", "loading", "loading"]
    }
    this.getRandomData = this.getRandomData.bind(this);
  }
  
  // returns random index from given argument
  getRandomData(data) {
    let randomItem = (Math.floor(Math.random() * data.length));
    return (randomItem);
  }


  componentDidMount() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(data => data.json())
    // .then(jData => console.log(jData[this.getRandomData(jData)]))
    .then(jData => {
 
        // get correct option
        const newCorrectCountry = (jData[this.getRandomData(jData)]);
        console.log(newCorrectCountry.flag, newCorrectCountry.name);
        // get data for incorrect options
        const newIncorrectCountries = this.state.incorrectCountries.map(() => {
          return (jData[this.getRandomData(jData)].name);
        })
        this.setState({
          currentFlag: newCorrectCountry.flag,
          correctCountry: newCorrectCountry.name,
          incorrectCountries: newIncorrectCountries
        });
    })
  }



  render() {
    return (
      <div className="App">
        <Banner />
         <RandomButtons correct={this.state.correctCountry} incorrect={this.state.incorrectCountries}/> 
        <Flag bgImg={this.state.currentFlag} />
      </div>
     
    )
  }
}

export default App
