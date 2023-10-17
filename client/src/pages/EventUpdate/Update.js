import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENT, UPDATE_EVENT } from "./queries";
import Loading from "../../components/Loading/Loading";
import { useMutation } from "@apollo/client";


function Update() {
  const { id } = useParams();
  console.log(id);

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });

  const [eventData, setEventData] = useState({
    title: "",
    desc: "",
    date: "",
    from: "",
    to: "",
    location_id: "",
    user_id: "",
  });
  const [updateEvent] = useMutation(UPDATE_EVENT);

  useEffect(() => {
    if (data) {
      setEventData({
        title: data.event.title,
        desc: data.event.desc,
        date: data.event.date,
        from: data.event.from,
        to: data.event.to,
        location_id: data.event.location_id,
        user_id: data.event.user_id,
      });
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updateEvent({
      variables: {
        updateEventId: id,
        edit: {
          title: eventData.title,
          desc: eventData.desc,
          date: eventData.date,
          from: eventData.from,
          to: eventData.to,
          location_id: eventData.location_id,
          user_id: eventData.user_id,
        },
      },
    });
    console.log(eventData);
  };

  if (loading) return <Loading />;

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <form className="updateForm" onSubmit={handleSubmit}>
        <div className="formItem">
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            name="title"
            required
            value={eventData.title}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="Description">Description:</label>
          <textarea
            type="text"
            name="desc"
            id="Description"
            required
            value={eventData.desc}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="Date">Date:</label>
          <input
            id="Date"
            required
            type="text"
            name="date"
            value={eventData.date}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="From">From:</label>
          <input
            id="From"
            required
            type="text"
            name="from"
            value={eventData.from}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="To">To:</label>
          <input
            id="To"
            required
            type="text"
            name="to"
            value={eventData.to}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="Location">Location ID:</label>
          <input
            id="Location"
            required
            type="text"
            name="location_id"
            value={eventData.location_id}
            onChange={handleChange}
          />
        </div>
        <div className="formItem">
          <label htmlFor="User">User ID:</label>
          <input
            id="User"
            required
            type="text"
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

export default Update;
