import React, { Component } from 'react';

import Camper from './Camper';

const Leaderboard = () =>
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
          {/* Camper here */}
          <Camper />
        </tbody>
      </table>
    </div>

export default Leaderboard;
