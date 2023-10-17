import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_EVENT } from "./queries";

function NewEvent() {
  const [addEvent] = useMutation(ADD_EVENT);
  const [eventData, setEventData] = useState({
    title: "",
    desc: "",
    date: "",
    from: "",
    to: "",
    location_id: "",
    user_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    addEvent({
      variables: {
        event: {
          title: eventData.title,
          desc: eventData.desc,
          date: eventData.date,
          from: eventData.from,
          to: eventData.to,
          location_id: eventData.location_id,
          user_id: eventData.user_id,
        },
      },
      refetchQueries: ["Events"],
    });
    console.log(eventData);
  };
  return (
    <div>
      <form className="updateForm" onSubmit={handleSubmit}>
        <div className="formItem">
          <label htmlFor="title">Title:</label>
          <input
            required
            type="text"
            id="title"
            name="title"
            value={eventData.title}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="Description">Description:</label>
          <textarea
            id="Description"
            type="text"
            name="desc"
            value={eventData.desc}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="Date">Date:</label>
          <input
            required
            id="Date"
            type="date"
            name="date"
            value={eventData.date}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="From">From:</label>
          <input
            required
            id="From"
            type="text"
            name="from"
            value={eventData.from}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="To">To:</label>
          <input
            required
            id="To"
            type="text"
            name="to"
            value={eventData.to}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="Location">Location ID:</label>
          <input
            required
            id="Location"
            type="number"
            name="location_id"
            value={eventData.location_id}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="User">User ID:</label>
          <input
            required
            id="User"
            type="number"
            name="user_id"
            value={eventData.user_id}
            onChange={handleChange}
          />
        </div>
        <button className="updateButtonSubmit" type="submit">
          Update
        </button>
      </form>
    </div>
  );
}

export default NewEvent;
