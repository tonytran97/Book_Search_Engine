import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        saveBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        bookCount
        saveBooks {
          bookId
          authors
          description
          title
          image
          link
        }
      }
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook(saveTheBook: BookInput) {
    saveBook(saveTheBook: $BookInput) {
        _id
        username
        email
        bookCount
        saveBooks {
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

export const REMOVE_BOOK = gql`
  mutation removeBook($bookId: ID!) {
    removeBook(bookId: $ID) {
        _id
        username
        email
        bookCount
        saveBooks {
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