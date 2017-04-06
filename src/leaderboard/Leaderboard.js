import React, { Component } from 'react';
import { fetchCampersData, sortData } from '../functions.js';
import shortid from 'shortid';

import Camper from './Camper';

export default class Leaderboard extends Component {
  constructor() {
    super();
    this.state = {campers: [ {"username":"forkerino","img":"https://avatars.githubusercontent.com/u/16620061?v=3","alltime":5000,"recent":545,"lastUpdate":"2017-03-17T17:49:58.192Z"}]}
  }

  setCampers(campers) {
    this.setState({ campers: campers }
    )
  }
  componentDidMount() {
    fetchCampersData().then(
      campers => this.setCampers(campers)
    );
  }
  handleSort(e,campers) {
    const {id} = e.target;
    sortData(id, campers);
    this.setCampers(campers);
  }

  render () {
    const {campers} = this.state;
    return (
      <div className="leaderboard">
        <div className="title">
          <h1>Leaderboard</h1>
        </div>
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Camper Name</th>
              <th>
                <a id="recent" href="#" onClick={(e) => this.handleSort(e,campers)}>
                  {/* Note: createReactApp uses property initializer syntax so handleSort doesn't need to be bound. Read More towards the bottom of: https://facebook.github.io/react/docs/handling-events.html */}
                  Points in the past 30 days
                </a>
              </th>
              <th>
                <a id="alltime" href="#" onClick={(e) => this.handleSort(e,campers)}>
                All time points
                </a>
              </th>
            </tr>
          </thead>
          <tbody>
            {campers.map (
              (camper,count) => {
              count += 1;
              return (
              <Camper
                camper={camper}
                key={shortid.generate()}
                num={count}
              />
              )}
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
