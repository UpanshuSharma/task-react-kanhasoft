import React from "react";
import "./EventDisplay.css";
import { data } from "./Data";
import { useSelector } from "react-redux";
function EventDisplay() {
  const events = useSelector((state) => state.EventReducer.data);
  // console.log("event: ", JSON.stringify(events));
  return (
    <div className="display">
      {events ? <h3>EVENT SCHEDULED</h3> : <h3>No Event scheduled yet</h3>}
      {events.map((item, index) => {
        return (
          <div className="itemlist" key={index}>
            <p className="label">
              <span className="name"> EVENT NAME</span>
              <span className="value">{item.name}</span>
            </p>
            <p className="label">
              <span className="name"> EVENT TYPE</span>
              <span className="value">{item.type}</span>
            </p>
            <p className="label">
              <span className="name"> START DATE</span>
              <span className="value">{item.startdate}</span>
            </p>
            <p className="label">
              <span className="name"> END DATE</span>
              <span className="value">{item.enddate}</span>
            </p>
            <p className="label">
              <span className="name"> HANDLE BY</span>
              <span className="value">{item.handle}</span>
            </p>
            <p className="label">
              <span className="name"> Organised By</span>
              <span className="value">{item.organization}</span>
            </p>
            <p className="label">
              <span className="name"> Sub Event</span>
              <span className="value">{item.subevent}</span>
            </p>
            <p className="label">
              <span className="name"> Description</span>
              <span className="value">{item.desc}</span>
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default EventDisplay;
