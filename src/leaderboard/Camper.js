import React, { Component } from 'react';
import { fetchCampersData } from '../fetch';

export default class Camper extends Component {
  constructor(){
    super();
    this.state = {campers: [ {"username":"forkerino","img":"https://avatars.githubusercontent.com/u/16620061?v=3","alltime":1248,"recent":545,"lastUpdate":"2017-03-17T17:49:58.192Z"}]}
  }

  setCampers(campers){
    this.setState({ campers: campers }
    )
  }

  // fetchCampersData = () => {  fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
  //     .then(response => response.json())
  //     .then(campers => {
  //       this.setCampers(campers)
  //   });
  // }
  componentDidMount(){
    console.log(this);
    // this.fetchCampersData(this.setCampers);
    fetchCampersData().then(
      campers => { console.log(campers);
        this.setCampers(campers);
       });
  }

  render () {
    const { campers } = this.state;



    return (
      <tr className="camper-row">
        <th>1</th>
        <th>
          <img src={campers[0].img} alt=""/>
          &nbsp;
          <a href={`http://www.freecodecamp.com/${campers[0].username}`}>{campers[0].username}</a>
        </th>
        <th>{campers[0].recent}</th>
        <th>{campers[0].alltime}</th>
      </tr>
    );
  }
}
