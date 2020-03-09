import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Jump from "react-reveal/Jump";
import Mycar from "./images/my-car.svg";
import Correct from "./images/correct.svg";
import Noextra from "./images/noextra.svg";
import DiscountBlock from "./images/discount.svg";
import Door from "./images/door.svg";
import Review from "./Review";
import { Route, NavLink, HashRouter } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <div>
          <div className='main-container flex-container'>
            <Fade bottom>
              <h1 className='big-title'>
                Nawab School Of{" "}
                <span style={{ color: "#604dd5" }}>Driving</span>{" "}
              </h1>
              <div className='flex-container'>
                <div className='main-title'>
                  <img
                    src={Correct}
                    style={{ width: `19px`, paddingRight: `10px` }}
                  ></img>
                  <p> Male and Female Instructors</p>
                </div>
                <div className='main-title'>
                  <img
                    src={Correct}
                    style={{ width: `19px`, paddingRight: `10px` }}
                  ></img>
                  <p> Comfortable Driving Lessons</p>
                </div>
                <div className='main-title'>
                  <img
                    src={Correct}
                    style={{ width: `19px`, paddingRight: `10px` }}
                  ></img>
                  <p>Top driving School in Leicester</p>
                </div>
              </div>
            </Fade>
            <Fade top>
              <div className='myButton'>
                <div className='flex-container'>
                  <p>Book a Lesson</p>
                  <p>07459775917</p>
                </div>
              </div>
            </Fade>
            <div className='main-img-container'>
              <img src={Mycar}></img>
            </div>
          </div>
        </div>
        <div className='section2 '>
          <div className='medium-title'>
            {" "}
            <Fade>
              <h1>A better way to </h1>
              <h1>learn to drive you car</h1>
            </Fade>
          </div>
          <div className='flex-container box-container'>
            <div className='box flex-container flex-box-container'>
              {" "}
              <img src={Door}></img>
            </div>
            <div className='box flex-container flex-box-container box-2'>
              <h1 style={{ textAlign: `center` }}>Door to door service</h1>
              <p style={{ textAlign: `center` }}>
                We provide pick and drop service from your home
              </p>
            </div>
          </div>
          <div className='flex-container box-container'>
            <div className='box flex-container flex-box-container'>
              <img src={DiscountBlock}></img>
            </div>
            <div className='box flex-container flex-box-container box-2'>
              <h1 style={{ textAlign: `center` }}> Block booking discount</h1>
              <p style={{ textAlign: `center` }}>
                Book a slot of 5 hours, 10 hours or 20 hours and get a special
                discount
              </p>
            </div>
          </div>
          <div className='flex-container box-container'>
            <div className='box flex-container flex-box-container '>
              {" "}
              <img src={Noextra}></img>
            </div>
            <div className='box flex-container flex-box-container box-2'>
              <h1 style={{ textAlign: `center` }}>
                No extra cost for weekends
              </h1>
              <p style={{ textAlign: `center` }}>
                No need to worry about the extra charges on weekend lessons, you
                can get your lessons as same price as weekday.
              </p>
            </div>
          </div>
        </div>
        <div className='flex-container section-3'>
          <Jump>
            <h1>
              Our driving school is a pupil focused school. Driving instructors
              are fully DVSA qualified and Approved Driving Instructors (ADI’s)
              and provide a professional and courteous service.
            </h1>
          </Jump>
        </div>
        <div className='flex-container section-4'>
          <h1>What our customers say</h1>
          <div className='feedback-section'>
            <div className='feedback-box'>
              <p>
                Hurrey…. ! I just passed my driving practical test today in
                first attemp. All because of Mr. Navab my instructor, who was
                very calm and patient and made my driving so easy and enjoyable.
                He always make sure tht his student pass the test in first go.
                Very punctual on time and flexible with your time as well.
                Highly recommended to all new learners.Honestly couldn't ask for
                better instructor than him.
              </p>
              <p style={{ fontStyle: "italic", paddingTop: "1rem" }}>
                - Dimpal Solanki
              </p>
            </div>
            <div className='feedback-box'>
              <p>
                Nawab is a brilliant instructor, very patient, positive and
                supportive through out the lessons. He focused on areas I needed
                to improve on, as well as going over other things to refresh my
                skills. He works around your life and always organised. I highly
                recommend Nawab school of driving.
              </p>
              <p style={{ fontStyle: "italic", paddingTop: "1rem" }}>
                - Carolyne Musan
              </p>
            </div>
          </div>
          <HashRouter>
            <NavLink to='/review'>
              <div className='myButton rev-btn'>
                <div className='flex-container'>
                  <p>View more reviews</p>
                </div>
              </div>
            </NavLink>
          </HashRouter>
        </div>
        <div>
          <div className='medium-title'>
            {" "}
            <Fade>
              <h1 style={{ textAlign: `center` }}>Our Prices</h1>
            </Fade>
          </div>
          <div className='flex-container price-table-container'>
            <table>
              <tbody>
                <tr>
                  <td>Your First 10 hour block booking</td>
                  <td>£230</td>
                </tr>
                <tr>
                  <td>Standard Driving Lesson (within Leicester)</td>
                  <td>£24 per hour</td>
                </tr>
                <tr>
                  <td>Standard Driving Lesson (outside Leicester)</td>
                  <td>£30 per hour</td>
                </tr>
                <tr>
                  <td>Standard 5 hrs Block Booking</td>
                  <td>£115 (£23 per hour)</td>
                </tr>
                <tr>
                  <td>Standard 10 hrs Block Booking</td>
                  <td>£230 (£23 per hour)</td>
                </tr>
                <tr>
                  <td>Standard 20 hrs Block Booking</td>
                  <td>£440 (£22 per hour)</td>
                </tr>
                <tr>
                  <td>Motorway Tuition</td>
                  <td>£30 per hour</td>
                </tr>
                <tr>
                  <td>Refresher Course</td>
                  <td>£27 per hour</td>
                </tr>
                <tr>
                  <td>Pass Plus course (Minimum 6 hours)</td>
                  <td>£180 (£30 per hour)</td>
                </tr>
                <tr>
                  <td>Test Day Fee: Hire of car & 1hr lesson before test</td>
                  <td>£80 (Weekdays)</td>
                </tr>
                <tr>
                  <td></td>
                  <td>£100 (Weekends)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
