import React from 'react';
import '../screens/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <div className="login-screen">
      <div className="left-side">
      <h1 className="heading1">LODGN</h1>
        <div className="navigation">
      
          <ul>
            <li><strong className="heading">Current Requests</strong></li>
            <li><strong className="heading">Ongoing Stays</strong></li>
            <li><strong className="heading">Previous Stays</strong></li>
            <li><strong className="heading">Reports</strong></li>
            <li className="logout-helpdesk-container">
            <div className="logout-helpdesk">
          <button className="logout-button">Log - Out</button>
          <strong className="logout-button1">Help-Desk:</strong>
          <strong className="logout-button2">786-874-9988</strong>
        </div>
      </li>
          </ul>
        </div>
      </div>
      <div className="main">
        <div className="h">
        <h2 className="heading2">You  currently have 3 requests</h2>
        </div>
      <div className="right-side">
      <div className="fields-row">
            <div className="field">St. Jude's Hospital</div>
            <div className="field">10  - 17 </div>
            <div className="field">20 Rooms</div>
          </div>
          <div className="second-row">
            <div className="field1">Sarasota.fl 33178</div>
            <div className="field1">October December</div>
            <div className="field1">10 singles, 10 doubles</div>
          </div>
          <div className="table-row">
            <div className="table-cell yellow-bg">Received</div>
            <div className="table-cell">Negotiating</div>
            <div className="table-cell">Completed</div>
          </div>
      </div>
      <div className="bottom-section">
        <div className="fields-row2">
          <div className="field2">St. Jude's Hospital</div>
          <div className="field2">10-17</div>
          <div className="field2">20 Rooms</div>
        </div>
        <div className="second-row1">
            <div className="field3">Sarasota.fl 33178</div>
            <div className="field3">October December</div>
            <div className="field3">10 singles, 10 doubles</div>
          </div>
        <div className="table-row">
            <div className="table-cell green-bg">Completed</div>
          </div>
          <div className="cards-section">
         
          <div className="card">
  <div className="card-content">
    <div className="card-description">1.5 miles away from job location</div>
    <div className="price-container">
      <div className="price-column">
        <div className="card-price">Singles: $120</div>
        <div className="card-price">Doubles: $145</div>
      </div>
      <button className="book-now-button">Book Now</button>
    </div>
  </div>
</div>
  <div className="card">
  <div className="card-content">
    <div className="card-description">1.5 miles away from job location</div>
    <div className="price-container">
      <div className="price-column">
        <div className="card-price">Singles: $120</div>
        <div className="card-price">Doubles: $145</div>
      </div>
      <button className="book-now-button">Book Now</button>
    </div>
  </div>
</div>
  <div className="card">
  <div className="card-content">
    <div className="card-description">1.5 miles away from job location</div>
    <div className="price-container">
      <div className="price-column">
        <div className="card-price">Singles: $120</div>
        <div className="card-price">Doubles: $145</div>
      </div>
      <button className="book-now-button">Book Now</button>
    </div>
  </div>
</div>
</div>

      </div>
      <button className="chat-button">
            <FontAwesomeIcon icon={faComments} className="chat-icon" />
          </button>
      </div>
    </div>
  );
};

export default Login;
