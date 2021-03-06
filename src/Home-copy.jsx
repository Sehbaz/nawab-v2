import React, { Component } from "react";
import Pickup from "./images/pickup.png";
import Discount from "./images/coupon.png";
import Savemoney from "./images/save-money.png";
import Fade from "react-reveal/Fade";
import Spin from "react-reveal/Spin";
import Pulse from "react-reveal/Pulse";

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='main-container'>
          <div>
            <div>
              <Fade>
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
              </Fade>
              <Fade top>
                {" "}
                <div className='myButton'>
                  Driving Lessons Starting From £22/hr
                </div>
              </Fade>
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
            <Fade>
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
            </Fade>
            <Fade top>
              <div className='myButton'>07977589345 JUST A CALL AWAY</div>
            </Fade>
          </div>
          <div className='card-container'>
            <div className='card'>
              <h3>Door to Door Service</h3>
              <Pulse>
                <img src={Pickup} className='card-img'></img>
              </Pulse>
            </div>
            <div className='card'>
              <h3>Block Booking Discounts</h3>
              <Spin>
                {" "}
                <img src={Discount} className='card-img'></img>
              </Spin>
            </div>
            <div className='card'>
              <h3 style={{ textAlign: `center` }}>
                No Extra Cost for Evenings/Weekends
              </h3>
              <Pulse>
                <img src={Savemoney} className='card-img'></img>
              </Pulse>
            </div>
          </div>
        </div>
        <div
          className='container'
          style={{
            height: `fit-content`,
            padding: `2rem`,
            backgroundColor: `#f7f7f7`
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
            <h1 style={{ marginBottom: `2rem` }}>Our Pricing</h1>
          </div>
          <div className='card-container'>
            <div className='price-card'>
              <h1>£22/h</h1>
              <p>Driving Lessons As Low As</p>
            </div>
            <div className='price-card'>
              <h1>£230</h1>
              <p>Your First 10 hour block booking</p>
            </div>
            <div className='price-card'>
              <h1>£115</h1>
              <p>Standard 5 hrs Block Booking</p>
            </div>
            <div className='price-card'>
              <h1>£230</h1>
              <p>Standard 10 hrs Block Booking</p>
            </div>
          </div>
          <div className='card-container'>
            <div className='price-card' style={{ backgroundColor: `#ED4C67` }}>
              <h1>£440</h1>
              <p>Standard 20 hrs Block Booking</p>
            </div>
            <div className='price-card' style={{ backgroundColor: `#ED4C67` }}>
              <h1>£24/h </h1>
              <p>Standard Driving Lesson (within Leicester)</p>
            </div>
            <div className='price-card' style={{ backgroundColor: `#ED4C67` }}>
              <h1>£30/h </h1>
              <p>Standard Driving Lesson (outside Leicester)</p>
            </div>
            <div className='price-card' style={{ backgroundColor: `#ED4C67` }}>
              <h1>£30/h</h1>
              <p>Motorway Tuition</p>
            </div>
          </div>
          <div className='card-container'>
            <div className='price-card' style={{ backgroundColor: `#F79F1F` }}>
              <h1>£27</h1>
              <p>Refresher Course</p>
            </div>
            <div className='price-card' style={{ backgroundColor: `#F79F1F` }}>
              <h1>£180 </h1>
              <p>Standard Driving Lesson (within Leicester)</p>
            </div>
            <div className='price-card' style={{ backgroundColor: `#F79F1F` }}>
              <h1>£80</h1>
              <p>Test WeekDay Fee: Hire of car & 1hr lesson before test</p>
            </div>
            <div className='price-card' style={{ backgroundColor: `#F79F1F` }}>
              <h1>£100</h1>
              <p>Test Weekend Fee: Hire of car & 1hr lesson before test</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
