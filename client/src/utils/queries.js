import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query tech {
    query {
      _me
      _id
      username
      email
      savedBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const QUERY_MATCHUPS = gql`
query matchups(_id: String) {
  matchups(id: $_id) {
    _id
    tech1
    tech2
    tech1_votes
    tech2_votes
  }
}
`;
