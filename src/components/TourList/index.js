import React, { Component } from "react";
import "./TourList.scss";
import Tour from "../Tour/Tour";
import { tourData } from "../../data/tourData";

export default class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: tourData
    };
  }

  removeTour = id => {
    console.log("klick");
    const sortedArray = this.state.tours.filter(tour => tour.id !== id);
    this.setState({
      tours: sortedArray
    });
  };

  render() {
    return (
      <section className="tourlist">
        {this.state.tours.map(tourItem => {
          return (
            <Tour
              key={tourItem.id}
              data={tourItem}
              deleteItem={() => this.removeTour(tourItem.id)}
            />
          );
        })}
      </section>
    );
  }
}
