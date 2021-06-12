import React from "react";
import data from "../data/data.json";
export default function Team() {
  return (
    <>
      <div id="team">
        <div className="container">
          <div id="row">
            <div className="col-md-6">
              <div className="col-md-10 col-md-offset-1">
                <div className="section-title">
                  <h2>{data[0].team.name}</h2>
                </div>
                <p>{data[0].team.text1}</p>
                <p>{data[0].team.text2}</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team-img">
                <img src={data[0].team.img} alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
