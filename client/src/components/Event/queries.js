import { gql } from '@apollo/client';

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

