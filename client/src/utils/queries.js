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
        lingk
      }
    }
  }
`;

