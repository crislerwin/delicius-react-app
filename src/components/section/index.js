import React from "react";
import data from "../data/data.json"
export default function Section() {
  return (
    <>
      <div id="features" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Especialidades</h2>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-4">
              <div className="features-item">
                <h3>{data[0].specialties[1].name}</h3>
                <img
                  src="img/specials/1.jpg"
                  className="img-responsive"
                  alt=""
                />
                <p>
                {data[0].specialties[1].description}
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="features-item">
                <h3>{data[0].specialties[2].name}</h3>
                <img
                  src="img/specials/2.jpg"
                  className="img-responsive"
                  alt=""
                />
                <p>
                {data[0].specialties[2].description}
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-4">
              <div className="features-item">
                <h3>{data[0].specialties[3].name}</h3>
                <img
                  src="img/specials/3.jpg"
                  className="img-responsive"
                  alt=""
                />
                <p>
                {data[0].specialties[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
