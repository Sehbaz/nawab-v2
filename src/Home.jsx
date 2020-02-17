import React, { Component } from "react";
import MainImg from "./images/car.png";

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='main-container'>
          <div>
            <div>
              <h1 style={{ fontSize: `3rem`, color: `white` }}>
                Let's Get You On The Road
              </h1>
              <h4>
                {" "}
                Our driving school is a pupil focused school. Driving
                instructors are fully DVSA qualified and Approved Driving
                Instructors (ADI’s) and provide a professional and courteous
                service.
              </h4>
            </div>
            <div className='main-img-container'>
              <div style={{ display: `flex`, justifyContent: `center` }}>
                <img className='car-img' src={MainImg} alt='main-image'></img>
              </div>
            </div>
            <div style={{ display: `flex`, justifyContent: `center` }}>
              <a href='#' class='myButton'>
                07459775917
              </a>
            </div>
          </div>
        </div>
        <div
          className='container'
          style={{
            backgroundColor: `#e8eded`,
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
            <h2 style={{ marginBottom: `2rem` }}>About us</h2>
            <p
              style={{
                textAlign: `center`,
                lineHeight: `1.7`,
                margin: `1rem 0`
              }}
            >
              We are patient and totally professional to handle your goals of
              earning your driver's license. Service, Security, and Success is
              what we are all about. Viva Driving School looks forward to
              serving you
            </p>
          </div>
          <div className='card-container'>
            <div className='card'>
              <h1>Hello</h1>
            </div>
            <div className='card'>
              <h1>Hello</h1>
            </div>
            <div className='card'>
              <h1>Hello</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <h2>Hello</h2>
        </div>
      </div>
    );
  }
}

export default Home;
