import React from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Table from "./Table/Table";
import axios from "axios";

class PastEvents extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    axios
      .get("/getpastevents.json")
      .then((data) => {
        let res = [];
        data.data.data.map((data) => {
          res.push({
            id: data.id,
            name: data.name,
            date: data.date,
            time: data.time,
            location: data.location,
            image: data.image,
          });
          this.setState({ events: res });
        });
      })
      .catch((data) => {});
  }

  render() {
    return (
      <React.Fragment>
        <div className="text-center">
          <header>
            <Navbar />
            <h2 className="pt-5 pb-4 events-title">Eventos Pasados</h2>
          </header>
        </div>

        <div className="react-background-events">
          <Table events={this.state.events} />
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

export default PastEvents;
