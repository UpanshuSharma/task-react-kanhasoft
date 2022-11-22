import React, { useState } from "react";
import "./EventCreate.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { addEvent } from "../../redux/actions/EventAction";
import { useDispatch } from "react-redux";

function EventCreate() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [data, setData] = useState({});
  const dispatch = useDispatch();

  const handleSave = (e) => {
    e.preventDefault();

    dispatch(addEvent(data));
    setData({});
    setStartDate(null);
    setEndDate(null);
  };
  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  return (
    <div className="event-create">
      <div className="input-container">
        <div className="event-input">
          <div className="row">
            <label htmlFor="name">
              Event Name:&nbsp;&nbsp; <br />
              <input
                type="text"
                id="name"
                name="name"
                value={data.name}
                placeholder="Event Name"
                className="input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="type">
              Event Type:
              <br />
              <select
                name="type"
                id="type"
                className="input"
                onChange={handleChange}
                // value={data.}
              >
                <option value="sports">Sports</option>
                <option value="music">Music</option>
                <option value="general">General</option>
                <option value="children">Children</option>
                <option value="school">School</option>
              </select>
            </label>
          </div>
        </div>

        <div className="event-input">
          <div className="row">
            <label htmlFor="name">
              Start Date:&nbsp;&nbsp; <br />{" "}
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  let res = date.toLocaleDateString();
                  console.log("Res: " + res + " " + typeof res);
                  setData({ ...data, ["startdate"]: res });
                  setStartDate(date);
                }}
                dateFormat={"dd-MM-yyyy"}
                placeholderText={"Select Start Date"}
                minDate={new Date()}
                //   maxDate={}
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                //   scrollableYearDropdown
                className="input"
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="name">
              End Date:&nbsp;&nbsp; <br />{" "}
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  let res = date.toLocaleDateString();
                  console.log("Res: " + res + " " + typeof res);
                  setData({ ...data, ["enddate"]: res });
                  setEndDate(date);
                }}
                dateFormat={"dd-MM-yyyy"}
                placeholderText={"Select End Date"}
                minDate={startDate}
                //   maxDate={}
                filterDate={(date) =>
                  date.getDay() !== 6 && date.getDay() !== 0
                }
                isClearable
                showYearDropdown
                scrollableMonthYearDropdown
                //   scrollableYearDropdown
                className="input"
              />
            </label>
          </div>
        </div>

        <div className="event-input">
          <div className="row">
            <label htmlFor="handle">
              Handle By:&nbsp;&nbsp; <br />
              <input
                type="text"
                id="handle"
                name="handle"
                value={data.handle}
                placeholder="Handle By  "
                className="input"
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="row">
            <label htmlFor="organization">
              Organization:&nbsp;&nbsp; <br />
              <input
                type="text"
                id="organization"
                name="organization"
                value={data.organization}
                placeholder="Oganizsed By"
                className="input"
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="row">
            <label htmlFor="subevent">
              Total SubEvents:&nbsp;&nbsp; <br />
              <input
                type="number"
                id="subevent"
                name="subevent"
                placeholder="Total Sub Event"
                className="input"
                value={data.subevent}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>

        <div className="description">
          <label htmlFor="desc">
            Description:&nbsp;&nbsp; <br />
            <textarea
              type="number"
              rows={10}
              cols={30}
              id="desc"
              name="desc"
              value={data.desc}
              placeholder="Description"
              className="textarea"
              onChange={handleChange}
            />
          </label>
        </div>
        <button className="save-btn" onClick={handleSave}>
          Save Post
        </button>
      </div>
    </div>
  );
}

export default EventCreate;
