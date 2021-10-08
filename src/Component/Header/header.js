import React from "react";
import HeroImg1 from '../../Assets/hero1.jpg';
import HeroImg4 from '../../Assets/hero4.jpg';
import './header.css';

const Header = () => {
  return (
    <>
      <header>
        <section className="container main-hero-container">
          <div className="row">
            <div className="col-12 col-lg-6 header-left-side d-flex flex-column justify-content-center align-items-start">
              <h1 className="display-2">
                Online Payment Made <br /> Easy for You.
              </h1>
              <p className="main-hero-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.  
              </p>
              <h3>Get Early access for you!</h3>
              <div className="input-group mt-3">
                <input
                  type="text"
                  className="rounded-pill w-75 me-3 p-2 form-control-text" placeholder="Enter Your Email"
                ></input>
                <div className="input-group-button">Get It Now</div>
              </div>
            </div>
            <div className="col-12 col-lg-6 header-right-side main-herosection-images d-flex justify-content-center align-items-center">
                <img src={HeroImg1} alt="hero-img" className="img-fluid" />
                <img src={HeroImg4} alt="hero-img" className="img-fluid main-herosection-img2" />
            </div>
          </div>
        </section>
      </header>
    </>
  );
};

export default Header;
