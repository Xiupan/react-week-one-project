import React, {Component} from 'react'
import PlayListItem from './PlayListItem'
import PlayListForm from './PlayListForm'

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
    })
  }

  // fetchData is meant to be a manual fetch tied to some kind of update button
  fetchData = (event) => {
    // event.preventDefault();
    fetch('https://tiny-lasagna-server.herokuapp.com/collections/playlisting').then(results => {
      return results.json();
    }).then(data => {
      console.log("Fetching data.");
      this.setState({
        songs: data
      });
    })
  }

  render() {
    return (
      <div className="card-deck">
        <PlayListItem songs={this.state.songs} />
        <PlayListForm fetchData={this.fetchData}/>
      </div>
    )
  }
}

export default PlayList
