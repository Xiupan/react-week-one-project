import React, {Component} from 'react'

class PlayList extends Component {
  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        songs: data
      });
      console.log("state", this.state.songs);
    })
  }

  // fetchData is meant to be a manual fetch tied to some kind of update button
  fetchData = (event) => {
    event.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      this.setState({
        songs: data
      });
    })
  }

  render() {
    const elements = this.state.songs.map(song => {
      return(
        <div className="card" key={song._id}>
          <ul>
            <li>
              <h5 className="card-text">
                User: {song.userName}
              </h5>
              <h5 className="card-text">
                Artist/Band: {song.songArtist}
              </h5>
              <h5 className="card-text">
                Title: {song.songTitle}
              </h5>
              <h5 className="card-text">
                Notes: {song.songNotes}
              </h5>
            </li>
          </ul>
        </div>
      )
    })
    return (
      <div className="card-deck">
        {elements}
      </div>
    )
  }
}

export default PlayList
