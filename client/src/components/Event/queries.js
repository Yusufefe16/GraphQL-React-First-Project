import { gql } from "@apollo/client";

export const GET_EVENT = gql`
  query MyQuery {
    events {
      id
      date
      title
      desc
    }
  }
`;

export const EVENT_SUBSCRIPTION = gql`
  subscription {
    eventCreated {
      id
      date
      title
      desc
    }
  }
`;
