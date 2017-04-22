import React from 'react';

function CamperRow(props) {
  return (
    <tr>
      <td>{props.index + 1}</td>
      <td className="avatarCell">
        <img src={props.camper.img} alt="avatar"/>
        <p><b><a
          href={`https://www.freecodecamp.com/${props.camper.username}`}>
          {props.camper.username}
        </a></b></p>
      </td>
      <td>{props.camper.recent}</td>
      <td>{props.camper.alltime}</td>
    </tr>
  );
}

export default CamperRow;
