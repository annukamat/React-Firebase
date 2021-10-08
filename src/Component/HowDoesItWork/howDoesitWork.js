import React, { useState } from "react";
import workapi from "../../API/workApi";
import "./howDoesitWork.css";

const HowDoesItWork = () => {
  const [workData, setWorkData] = useState(workapi);
  // console.log(workData);
  return (
    <>
      <section>
        <div className="work-container container">
          <h1 className="main-heading text-center">How Does it Works</h1>
          <div className="row">
            {workData.map((currEle) => {
              const { id, logo, title, info } = currEle;
              return (
                <>
                  <div className="col-12 col-lg-4 text-center work-container-subDiv">
                    <i class={`fontAwesome-style ${logo}`}></i>
                    <h2 className="sub-heading">{title}</h2>
                    <p className="main-hero-para w-100">{info}</p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default HowDoesItWork;
