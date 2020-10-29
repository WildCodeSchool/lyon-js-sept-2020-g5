import React from 'react';
import '../Style/hallCard.css';

function HallCard(props) {
  const { name, img, atk, hp, power, alignment, id } = props;
  return (
    <div className="HallCard">
      <div>
        <table>
          <tr>
            <td>Name: </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>ID: </td>
            <td>{id}</td>
          </tr>
        </table>
      </div>
      <div>
        <img src={img} alt={name} />
      </div>
      <div>
        <table>
          <tr>
            <td>Attack :</td>
            <td>{atk}</td>
          </tr>
          <tr>
            <td>Power :</td>
            <td>{power}</td>
          </tr>
          <tr>
            <td>HP :</td>
            <td>{hp}</td>
          </tr>
          <tr>
            <td>Alignment :</td>
            <td>{alignment}</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default HallCard;
