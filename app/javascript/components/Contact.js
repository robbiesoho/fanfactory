import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./Navbar";

class Contact extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="contact-container">
          <div className="text-center">
            <header>
              <Navbar />
              <h2 className="pt-5 pb-4 events-title">Contacta Con Nosotros</h2>
            </header>
          </div>
          <div className="react-background-events">
            <div className="container">
              <div className="row">
                <div className="col-8">
                  <div className="text-center">
                    <div className="card card-contact">
                      <div className="card-body">
                        <ul>
                          <li>Telefono: +52 1 246 135 3279</li>
                          <li>
                            Correo electrónico:{" "}
                            <a href="mailto:fanfactorytlax@gmail.com">
                              fanfactorytlax@gmail.com
                            </a>
                          </li>
                          <li>
                            Dirección:{" "}
                            <a href="https://www.google.com/maps/place/Progreso+Nte.+26,+Ximentla,+Centro,+90800+Chiautempan,+Tlax.,+Mexico/@19.316301,-98.2006553,17z/data=!3m1!4b1!4m5!3m4!1s0x85cfdeea66a27fef:0xd1777df01de9998a!8m2!3d19.316301!4d-98.1984666">
                              Calle Progreso Norte # 22 90800 Santa Ana
                              Chiautempan, Tlaxcala, Mexico
                            </a>
                          </li>
                          <li>
                            <a href="https://www.facebook.com/FanFactoryTours">
                              <img
                                className="fb-img"
                                src="https://imageog.flaticon.com/icons/png/512/124/124010.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
                              ></img>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Contact;
