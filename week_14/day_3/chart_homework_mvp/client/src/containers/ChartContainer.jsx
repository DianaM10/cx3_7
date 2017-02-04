import React from 'react';
import Chart from '../components/Chart.jsx';

class ChartContainer extends React.Component {
  constructor( props ) {
    super(props);
    this.state = {songs: [] }; //set state 
  }

  loadSongs(url) {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
      if (request.status === 200) {
        const jsonString = request.responseText;
        const songsList = JSON.parse(jsonString);
        this.setState({songs: songsList.feed.entry})
      }
    }
    request.send(null)
  }


// var ChartContainer = React.createClass({
//   getInitialState: function () {
//     return { songs: [] };
//   },

  // loadSongs: function (url) {
  //   var request = new XMLHttpRequest();
  //   request.open('GET', url);
  //   request.onload = function () {
  //     if (request.status === 200) {
  //       var jsonString = request.responseText;
  //       var songsList = JSON.parse(jsonString);
  //       this.setState({songs: songsList.feed.entry});
  //     }
  //   }.bind(this);
  //   request.send(null);
  // },

  componentDidMount() {
    this.loadSongs(this.props.url);
  }

  render() {

    if(!this.state.songs.length){ return <p>Loading...</p> }
    return (
      <Chart
      songs={this.state.songs}
      />
    );
  }
}
;

export default ChartContainer;
