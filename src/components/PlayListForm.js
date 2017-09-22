import React, {Component} from 'react'
import PlayList from './PlayList'

class PlayListForm extends Component {
  handleUsernameChange = (event) => {
    this.setState({userName: event.target.value})
  }

  handleArtistChange = (event) => {
    this.setState({songArtist: event.target.value})
  }

  handleTitleChange = (event) => {
    this.setState({songTitle: event.target.value})
  }

  handleNotesChange = (event) => {
    this.setState({songNotes: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      userName: event.target.username.value,
      songArtist: event.target.artist.value,
      songTitle: event.target.songTitle.value,
      songNotes: event.target.notes.value
    })
    console.log(this.state);
  }

  addToList = (event) => {
    event.preventDefault();
    this.setState({
      userName: event.target.value,
      songTitle: event.target.value,
      songArtist: event.target.value,
      songNotes: event.target.value
    });
    let listItem = JSON.stringify(this.state);

    fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
      method: "POST",
      body: listItem,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => {
      console.log(response, "yay");
      // this.fetchData()

    }).catch(err => {
      console.log(err, "boo!");
    });
    this.setState({
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle: ''
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.addToList}>
          <ul>
            <li>
              <label htmlFor="userName">Username:</label>
              <input id="userName" onChange={this.handleUsernameChange} placeholder="Name or Username"/>
            </li>
            <li>
              <label htmlFor="songArtist">Artist/Band:</label>
              <input id="songArtist" onChange={this.handleArtistChange} placeholder="Artist or Band Name"/>
            </li>
            <li>
              <label htmlFor="songTitle">Song Title:</label>
              <input id="songTitle" onChange={this.handleTitleChange} placeholder="Song Title"/>
            </li>
            <li>
              <label htmlFor="songNotes">Notes about Song:</label>
              <textarea id="songNotes" onChange={this.handleNotesChange}/>
            </li>
            <button type="submit">Submit</button>
          </ul>
        </form>
      </div>
    )
  }
}

export default PlayListForm
