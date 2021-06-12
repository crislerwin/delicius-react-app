import React from "react";
import data from "../data/data.json";
export default function Menu() {
  return (
    <>
      <div id="restaurant-menu">
        <div className="container">
          <div className="section-title text-center">
            <h2>MENU</h2>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="menu-section">
                <h2 className="menu-section-title">
                  {data[0].menu.primary.main}
                </h2>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.primary.items[0].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.primary.items[0].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.primary.items[0].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.primary.items[1].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.primary.items[1].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.primary.items[1].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.primary.items[2].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.primary.items[2].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.primary.items[2].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.primary.items[3].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.primary.items[3].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.primary.items[3].description}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="menu-section">
                <h2 className="menu-section-title">
                  {data[0].menu.secondary.main}
                </h2>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.secondary.items[0].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.secondary.items[0].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.secondary.items[0].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.secondary.items[1].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.secondary.items[1].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.secondary.items[1].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.secondary.items[2].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.secondary.items[2].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.secondary.items[2].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.secondary.items[3].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.secondary.items[3].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.secondary.items[3].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="menu-section">
                <h2 className="menu-section-title">
                  {data[0].menu.secondary.dinner}
                </h2>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.secondary.items[4].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.secondary.items[4].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.secondary.items[4].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.secondary.items[5].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.secondary.items[5].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.secondary.items[5].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.secondary.items[6].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.secondary.items[6].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.secondary.items[6].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.secondary.items[7].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.secondary.items[7].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.secondary.items[7].description}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="menu-section">
                <h2 className="menu-section-title">
                  {data[0].menu.primary.dessert}
                </h2>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {data[0].menu.primary.items[4].name}
                  </div>
                  <div className="menu-item-price">
                    {data[0].menu.primary.items[4].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.primary.items[4].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {" "}
                    {data[0].menu.primary.items[5].name}
                  </div>
                  <div className="menu-item-price">
                    {" "}
                    {data[0].menu.primary.items[5].price}{" "}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.primary.items[5].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {" "}
                    {data[0].menu.primary.items[6].name}
                  </div>
                  <div className="menu-item-price">
                    {" "}
                    {data[0].menu.primary.items[6].price}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.primary.items[6].description}
                  </div>
                </div>
                <div className="menu-item">
                  <div className="menu-item-name">
                    {" "}
                    {data[0].menu.primary.items[7].name}
                  </div>
                  <div className="menu-item-price">
                    {" "}
                    {data[0].menu.primary.items[7].price}{" "}
                  </div>
                  <div className="menu-item-description">
                    {data[0].menu.primary.items[7].description}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
