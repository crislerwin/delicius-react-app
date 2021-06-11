import React from "react";

export default function Team() {
  return (
    <>
      <div id="team">
        <div className="container">
          <div id="row">
            <div className="col-md-6">
              <div className="col-md-10 col-md-offset-1">
                <div className="section-title">
                  <h2>Conheça nosso Chef</h2>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam. Sed commodo nibh ante
                  facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec
                  ornare diam commodo nibh.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  sed dapibus leo nec ornare diam. Sed commodo nibh ante
                  facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec
                  ornare.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="team-img">
                <img src="img/chef.jpg" alt="..." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
