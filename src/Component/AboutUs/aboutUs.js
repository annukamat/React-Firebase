import React, { useState } from "react";
import howToUseApp from "../../API/howToUseApp";
import HeroImg3 from "../../Assets/hero3.jpg";
import CallCenterImg from '../../Assets/callcenter.jpg'
import "./aboutUs.css";


const AboutUs = () => {
  const [aboutData, setAboutData] = useState(howToUseApp);

  return (
    <>
      <section className="common-section our-services">
        <div className="container mb-5">
          <div className="row">
            <div className="col-12 col-lg-5 text-center our-service-leftside-img">
              <img src={HeroImg3} alt="aboutUsImg" className="img-fluid" />
            </div>
            {/**Right side section */}
            <div className="col-12 col-lg-7 our-service-list">
              <h3 className="mini-title">
                -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
              </h3>
              <h1 className="main-heading">How To Use The App</h1>

              {aboutData.map((currData) => {
                const { id, title, info } = currData;
                return (
                  <>
                    {/* /*map start*/}
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                    {/* /*map end*/}
                  </>
                );
              })}

              <br />
              <button className="btn-style btn-style-rt">learn more</button>
            </div>
          </div>
        </div>
      </section>


      {/**SERVICE SECTION */}
      <section className="common-section our-services our-services-right-side">
        <div className="container mb-5">
          <div className="row">
            {/**left side section */}
            <div className="col-12 col-lg-7 our-service-right-side-content d-flex justify-content-center align-items-start flex-column">
              <h3 className="mini-title">
              -- SUPPORT IN ANY LANGUAGES
              </h3>
              <h1 className="main-heading"> World class support is <br /> available 24/7</h1>

              { aboutData.map((currData) => {
                const { id, title, info } = currData;
                return (
                  <>
                    {/* /*map start*/}
                    <div className="row our-services-info">
                      <div className="col-1 our-services-number">{id}</div>
                      <div className="col-10 our-services-data">
                        <h2>{title}</h2>
                        <p className="main-hero-para">{info}</p>
                      </div>
                    </div>
                    {/* /*map end*/}
                  </>
                );
              }) }

              <br />
              <button className="btn-style btn-style-rt">learn more</button>
            </div>

            {/**right image side */}
            <div className="col-12 col-lg-5 text-center our-service-rightside-img">
              <img src={CallCenterImg} alt="aboutUsImg" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>


    </>
  );
};
export default AboutUs;
