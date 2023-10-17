import { gql } from '@apollo/client';

export const ADD_EVENT = gql`
  mutation Mutation($event: AddEventInput!) {
    addEvent(event: $event) {
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