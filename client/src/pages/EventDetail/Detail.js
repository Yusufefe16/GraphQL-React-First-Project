import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_EVENT } from "./queries";
import Loading from "../../components/Loading/Loading";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  console.log(id);

  const { loading, error, data } = useQuery(GET_EVENT, {
    variables: { id },
    fetchPolicy: "network-only",
  });

  if (loading) {
    <div>
      <Loading />
    </div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  console.log(data);
  if (!data) {
    return <div className="loadingData">Data id loading...</div>;
  }

  return (
    <div className="eventDetailPage event">
      <div className="updateButton">
        <h2>{data.event.title}</h2>
        <Link to={`/event/update/${id}`}>Update</Link>
      </div>
      <div className="detailP">
        <p>
          <strong>Date:</strong> {data.event.date}
        </p>
        <p>
          <strong>Time:</strong> {data.event.from} - {data.event.to}
        </p>
        <p>
          <strong>Description:</strong> {data.event.desc}
        </p>
        <p>
          <strong>Location:</strong> {data.event.location.name}
        </p>
        <p>
          <strong>Event Host:</strong> {data.event.user.username}
        </p>
      </div>
    </div>
  );
}

export default Detail;
