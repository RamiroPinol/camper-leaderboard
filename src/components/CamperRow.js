import React from 'react';

function CamperRow(props) {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td>
        <img src={props.camper.img} alt="avatar"/>
        <b>{props.camper.username}</b>
      </td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
}

export default CamperRow;
