/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Contact() {
  return (
    <>
      <div id="contact" className="text-center">
        <div className="container text-center">
          <div className="col-md-4">
            <h3>Reservas</h3>
            <div className="contact-item">
              <p>Ligue</p>
              <p>(887) 654-3210</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Endereço</h3>
            <div className="contact-item">
              <p>4321 California St,</p>
              <p>San Francisco, CA 12345</p>
            </div>
          </div>
          <div className="col-md-4">
            <h3>Estamos Abertos</h3>
            <div className="contact-item">
              <p>Mon-Thurs: 10:00 AM - 11:00 PM</p>
              <p>Fri-Sun: 11:00 AM - 02:00 AM</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="section-title text-center">
            <h3>Nos envie sua mensagem</h3>
          </div>
          <div className="col-md-8 col-md-offset-2">
            <form name="sentMessage" id="contactForm" novalidate>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                    />
                    <p className="help-block text-danger"></p>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
                <p className="help-block text-danger"></p>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-custom btn-lg">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <div className="col-md-6">
            <p>
              &copy; 2021. All rights reserved. Design by{" "}
              <a href="http://www.crisler.tech" rel="nofollow">
                Crisler Wintler
              </a>
            </p>
          </div>
          <div className="col-md-6">
            <div className="social">
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fa fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
