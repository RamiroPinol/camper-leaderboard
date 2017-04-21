import React, { Component } from 'react';
import CamperRow from './CamperRow';

class CampersList extends Component {
  constructor(props) {
    super(props)
    this.state = { alltime: [], recent: [], current: 'alltime' }

    this.changeList = this.changeList.bind(this);
    this.whatToRender = this.whatToRender.bind(this);
  }

  componentWillMount() {
    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
      .then(res => res.json())
      .then(campers => this.setState({ recent: campers }))

    fetch("https://fcctop100.herokuapp.com/api/fccusers/top/alltime")
      .then(res => res.json())
      .then(campers => this.setState({ alltime: campers }))
  }

  changeList() {
    if (this.state.current === 'alltime') {
      this.setState({ current: 'recent'})
    } else {
      this.setState({ current: 'alltime'})
    }
  }

  whatToRender() {
    if (this.state.current === 'alltime') {
      return this.state.alltime.map((camper, index) => <CamperRow key={camper.username} index={index} camper={camper} />)
    } else {
      return this.state.recent.map((camper, index) => <CamperRow key={camper.username} index={index} camper={camper} />)
    }
  }

  render() {
    if (this.state.alltime.length > 0) {
      return (
        <div>
          <table>
            <thead onClick={this.changeList}>
              <tr>
                <th>#</th>
                <th>Camper</th>
                <th>Last 30 days points</th>
                <th>Alltime points</th>
              </tr>
            </thead>
            <tbody>
              {this.whatToRender()}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h3>Loading data...</h3>
    }
  }
}

export default CampersList;
