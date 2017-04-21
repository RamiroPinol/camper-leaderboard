import React, { Component } from 'react';
import CamperRow from './CamperRow';

class CampersList extends Component {
  constructor(props) {
    super(props)
    this.state = { alltime: [], recent: [], current: 'alltime' }

    this.changeList = this.changeList.bind(this);
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

  render() {
    if (this.state.alltime.length > 0) {
      return (
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Camper</th>
                <th
                  className={this.state.current === "recent" ? "active" : ""}
                  onClick={this.state.current === "alltime" ? this.changeList : ""}>
                  Last 30 days points
                </th>
                <th
                  className={this.state.current === "alltime" ? "active" : ""}
                  onClick={this.state.current === "recent" ? this.changeList : ""}>
                  Alltime points
                </th>
              </tr>
            </thead>
            <tbody>
              {this.state[this.state.current].map( (camper, index) => {
                return <CamperRow key={camper.username} index={index} camper={camper} />
              })}
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
