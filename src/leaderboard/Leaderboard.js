import React, { Component } from 'react';
import { fetchCampersData } from '../functions/fetch';
import shortid from 'shortid';

import Camper from './Camper';

export default class Leaderboard extends Component {
  constructor(){
    super();
    this.state = {campers: [ {"username":"forkerino","img":"https://avatars.githubusercontent.com/u/16620061?v=3","alltime":5000,"recent":545,"lastUpdate":"2017-03-17T17:49:58.192Z"}]}
  }

  setCampers(campers){
    this.setState({ campers: campers }
    )
  }
  componentDidMount(){
    fetchCampersData().then(
      campers => this.setCampers(campers)
    );
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
              <th>Points in the past 30 days</th>
              <th>All time points</th>
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
