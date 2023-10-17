import { gql } from "@apollo/client";

export const GET_EVENT = gql`
  query getEvent($id: ID!) {
    event(id: $id) {
      id
      title
      desc
      date
      from
      to
      location_id
      user_id
    }
  }
`;


export const UPDATE_EVENT= gql`
  mutation Mutation($updateEventId: ID!, $edit: EditEventInput!) {
  updateEvent(id: $updateEventId, edit: $edit) {
    title
    desc
    date
    from
    to
    location_id
    user_id
  }
}
`;