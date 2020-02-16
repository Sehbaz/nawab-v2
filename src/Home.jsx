import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className='container'>
        <div className='main-container'>
          <div>
            <h1 style={{ fontSize: `4rem`, color: `white` }}>
              Let's Get You On The Road
            </h1>
            <h4>
              {" "}
              Our driving school is a pupil focused school. Driving instructors
              are fully DVSA qualified and Approved Driving Instructors (ADI’s)
              and provide a professional and courteous service.
            </h4>
          </div>
        </div>
        <div className='container'>
          <h2>Hello</h2>
        </div>
        <div className='container' style={{ backgroundColor: `#e8eded` }}>
          <h2>Hello</h2>
        </div>
      </div>
    );
  }
}

export default Home;
