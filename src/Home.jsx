import React, { Component } from "react";
import Pickup from "./images/pickup.png";
import Discount from "./images/coupon.png";
import Savemoney from "./images/save-money.png";

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='main-container'>
          <div>
            <div>
              <h1 style={{ fontSize: `3rem`, color: `white` }}>
                NAWAB SCHOOL OF MOTORING
              </h1>
              <h3 style={{}}>Let's Get You On The Road</h3>
              <p>
                {" "}
                Our driving school is a pupil focused school. Driving
                instructors are fully DVSA qualified and Approved Driving
                Instructors (ADI’s) and provide a professional and courteous
                service.
              </p>
            </div>

            <div style={{ display: `flex`, justifyContent: `center` }}>
              <a href='' class='myButton'>
                07459775917
              </a>
            </div>
          </div>
        </div>
        <div
          className='container'
          style={{
            height: `fit-content`,
            padding: `2rem`
          }}
        >
          <div
            className='about-container'
            style={{
              justifyContent: `center`,
              display: `flex`,
              flexWrap: `wrap`
            }}
          >
            <h1 style={{ marginBottom: `2rem` }}>About us</h1>
            <p
              style={{
                textAlign: `center`,
                lineHeight: `1.7`,
                margin: `1rem 0`
              }}
            >
              We are patient and totally professional to handle your goals of
              earning your driver's license. Service, Security, and Success is
              what we are all about. Nawab Driving School looks forward to
              serving you
            </p>
          </div>
          <div className='card-container'>
            <div className='card'>
              <h3>Door to Door Service</h3>
              <img src={Pickup} className='card-img'></img>
            </div>
            <div className='card'>
              <h3>Block Booking Discounts</h3>
              <img src={Discount} className='card-img'></img>
            </div>
            <div className='card'>
              <h3>No Extra Cost for Evenings/Weekends</h3>
              <img src={Savemoney} className='card-img'></img>
            </div>
          </div>
        </div>
        <div
          className='container'
          style={{ backgroundColor: `hsl(0, 0%, 29%)` }}
        >
          <h2>Hello</h2>
        </div>
      </div>
    );
  }
}

export default Home;
