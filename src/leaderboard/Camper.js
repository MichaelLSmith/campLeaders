import React from 'react';
import { raw } from '../fetch';

const Camper = () => {

  return (

      <tr className="camper-row">
        <th>1</th>
        <th>
          <img src={raw[0].img} alt=""/>
          &nbsp;
          <a href={`http://www.freecodecamp.com/${raw[0].username}`}>{raw[0].username}</a>
        </th>
        <th>{raw[0].recent}</th>
        <th>{raw[0].alltime}</th>
      </tr>
    )
  }


export default Camper;
