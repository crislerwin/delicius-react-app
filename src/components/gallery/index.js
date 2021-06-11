import React from "react";

export default function Gallery() {
  return (
    <>
      <div id="gallery">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-md-3">
              <div className="gallery-item">
                {" "}
                <img
                  src="img/gallery/01.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="gallery-item">
                {" "}
                <img
                  src="img/gallery/02.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="gallery-item">
                {" "}
                <img
                  src="img/gallery/03.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
            <div className="col-xs-6 col-md-3">
              <div className="gallery-item">
                {" "}
                <img
                  src="img/gallery/04.jpg"
                  className="img-responsive"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
