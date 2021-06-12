import React from "react";
import data from "../data/data.json";
export default function About() {
  return (
    <>
      <div id="about">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-md-6 about-img"> </div>
            <div className="col-xs-12 col-md-3 col-md-offset-1">
              <div className="about-text">
                <div className="section-title">
                  <h2>{data[0].about.name}</h2>
                </div>
                <p>{data[0].about.text1}</p>
                <p>
                  {data[0].about.text2}
                  ornare.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
