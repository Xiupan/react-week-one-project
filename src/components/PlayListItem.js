import React, {Component} from 'react'

class PlayListItem extends Component {
  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

  render() {
    const elements = this.props.songs.map(song => {
      return (
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
    return(
      <div>
        {elements}
      </div>
    )
  }
}

export default PlayListItem
