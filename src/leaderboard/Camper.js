import React from 'react';

export function Camper(props){
  const {campers} = props;
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
  )
}
export default Camper;
