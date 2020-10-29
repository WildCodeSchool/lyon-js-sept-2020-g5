import React from 'react';
import '../Style/hallCard.css';

function HallCard(props) {
  const { name, img, atk, hp, power, alignment } = props;
  return (
    <div>
      <div className="cards-list">
        <div className="card">
          <table>
            <thead>
              <tr>
                <th>{name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan="5">
                  <img src={img} alt={name} />
                </td>
              </tr>
              <tr>
                <td>Attack : {atk}</td>
              </tr>
              <tr>
                <td>Power : {power}</td>
              </tr>
              <tr>
                <td>HP : {hp}</td>
              </tr>
              <tr>
                <td>Alignment : {alignment}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default HallCard;
