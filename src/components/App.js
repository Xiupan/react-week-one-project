import React, { Component } from 'react';
import '../styles/App.css';
import NavBar from './NavBar'
import PlayList from './PlayList'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      userName: "",
      songArtist: "",
      songTitle: "",
      songNotes: ""
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <NavBar/>
        <PlayList/>
      </div>
    );
  }
}

export default App;
