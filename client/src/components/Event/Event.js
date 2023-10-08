import React from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENT } from "./queries";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

function Event() {
  const { loading, error, data } = useQuery(GET_EVENT);

  console.log(data);

  if (loading) return <Loading/>;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="eventList">
      <ul className="events">
        {data.events.map((event, key) => (
          <li key={key} className={`mainListItem ${event.id}`}>
            <div className="titleTime">
              <div className="title">
              <Link className="link" to={`/event/${event.id}`}>{`${event.title.slice(0, 70)}...`}</Link>
                </div>
              <div>{event.date}</div>
            </div>
            <p>{`${event.desc.slice(0, 50)}...`}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
