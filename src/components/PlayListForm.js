import React, { Component } from 'react'

class PlayListForm extends Component{
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handleArtistChange = (event) => {
    this.setState({
      artist: event.target.value
    })
  }

  handleTitleChange = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  handleNotesChange = (event) => {
    this.setState({
      notes: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      username: event.target.username.value,
      artist: event.target.artist.value,
      title: event.target.songTitle.value,
      notes: event.target.notes.value
    })
    console.log(this.state);
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label htmlFor="username">Username:</label>
              <input id="username" onChange={this.handleUsernameChange} placeholder="Name or Username" />
            </li>
            <li>
              <label htmlFor="artist">Artist/Band:</label>
              <input id="artist" onChange={this.handleArtistChange} placeholder="Artist or Band Name" />
            </li>
            <li>
              <label htmlFor="songTitle">Song Title:</label>
              <input id="songTitle" onChange={this.handleTitleChange} placeholder="Song Title" />
            </li>
            <li>
              <label htmlFor="notes">Notes about Song:</label>
              <textarea id="notes" onChange={this.handleNotesChange}/>
            </li>
            <button type="submit">Submit</button>
          </ul>
        </form>
      </div>
    )
  }
}

export default PlayListForm
