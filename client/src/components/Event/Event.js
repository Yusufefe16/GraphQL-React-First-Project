import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_EVENT, EVENT_SUBSCRIPTION } from "./queries";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

function Event() {
  const [eventData, setEventData] = useState([
    { title: "asd" },
    { title: "asd" },
  ]);

  const { loading, error, data, subscribeToMore } = useQuery(GET_EVENT, {
    fetchPolicy: "cache-and-network",
  });

  useEffect(() => {
    if (data) {
      setEventData(data.events);
      console.log(eventData);
    }
  }, [data]);

  useEffect(() => {
    subscribeToMore({
      document: EVENT_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        console.log("prev", prev);
        console.log("subscriptionData.data", subscriptionData.data);

        return {
          events: [...prev.events, subscriptionData.data.eventCreated],
        };
      },
    });
  }, []);

  if (loading) return <Loading />;
  if (error) return `Error! ${error.message}`;

  return (
    <div className="eventList">
      <div className="newEventLink">
        <Link className="newEvent" to={"/newEvent"}>
          Add new event
        </Link>
      </div>
      <ul className="events">
        {data.events.map((event, key) => (
          <li key={key} className={`mainListItem ${event.id}`}>
            <div className="titleTime">
              <div className="title">
                <Link
                  className="link"
                  to={`/event/${event.id}`}
                >{`${event.title.length>70 ?  event.title.slice(0, 70): event.title}${event.title.length>70?"...":""} `}</Link>
              </div>
              <div>{event.date}</div>
            </div>
            <p>{`${event.desc.length>50 ?  event.desc.slice(0, 50): event.desc}${event.desc.length>50?"...":""} `}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Event;
