import React from 'react';

export function Camper(props){
  const {camper} = props;
  return (
    <tr
      className="camper-row"
    >
      <th>{props.num}</th>
      <th>
        <img src={camper.img} alt=""/>
        &nbsp;
        <a href={`http://www.freecodecamp.com/${camper.username}`}>{camper.username}</a>
      </th>
      <th>{camper.recent}</th>
      <th>{camper.alltime}</th>
    </tr>
  )};
export default Camper;
