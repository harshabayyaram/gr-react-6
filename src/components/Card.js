import React from "react";
import "../../src/style.css";
import location from "../images/location-dot-solid.svg";
import online from "../images/status.svg";

const formatDate = function (last_date) {
  var date1 = new Date(last_date);
  var now = new Date();
  var diff = now - date1;

  const mins = Math.floor(diff / 6000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (diff <= 60000) {
    return "online";
  } else if (diff <= 3600000) {
    return `last seen ${mins} minutes ago`;
  } else if (diff <= 86400000) {
    return `last seen ${hours} hours ago`;
  } else if (diff <= 259200000) {
    return `last seen ${days} days ago`;
  } else {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return `last seen on ${days} days ago`;
  }
};

function Card(props) {
  return (
    <div className="t-card">
      <div className="top">
        <div className="img">
          <img src={props.profile} />
        </div>
        <h3 className="design">
          {props.designation.map((designation, i) => (
            <span>{designation}</span>
          ))}
        </h3>
        <h5 className="fee">{props.fee}</h5>
      </div>
      <div className="bottom">
        <h4 className="name">{props.name}, {props.age}</h4>

        <h6>
          <span className="loc">
            <img src={location} />
          </span>
          {props.location}
        </h6>

        <h7 className="bio">{props.bio}</h7>
        <br />
        <div className="btn">
          <button className="cv">VIEW CV</button>
        </div>
        <div className="btn">
          <button className="offer">MAKE OFFER</button>
        </div>
        <div className="status">
          <span>
            <img src={online} />
          </span>
          <span> {formatDate(props.lastDate)}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
