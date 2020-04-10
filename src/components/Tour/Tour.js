import React, { Component } from "react";
import "./Tour.scss";

export default class Tour extends Component {
  state = {
    showDetails: false
  };

  toggleDetails = () => {
    console.log("click");
    this.setState({
      showDetails: !this.state.showDetails
    });
  };

  render() {
    const { id, img, city, name, info } = this.props.data;
    const { deleteItem } = this.props;

    return (
      <article className="tour">
        <div className="image-container">
          <img src={img} alt="" />
          <span className="close-btn" onClick={deleteItem}>
            <i className="fas fa-window-close" />
          </span>
        </div>
        <div className="tour-info">
          <h3>{city}</h3>
          <h4>{name}</h4>
          <h5>
            info
            <span onClick={this.toggleDetails}>
              <i className="fas fa-caret-square-down" />
            </span>
          </h5>
          {this.state.showDetails ? <p>{info}</p> : null}
        </div>
      </article>
    );
  }
}
