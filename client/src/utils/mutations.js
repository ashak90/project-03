import { gql } from '@apollo/client';

export const ADD_USER = gql`
   mutation addUser($userInput: UserInput!) {
      addUser(userInput: $userInput) {
         token
         user {
            _id
            username
            email
         }
      }
   }
`;

export const LOGIN_USER = gql`
   mutation login($email: String!, $password: String!) {
      login(email: $email, password: $password) {
         token
         user {
            _id
            username
            email
         }
      }
   }
`;

export const ADD_POST = gql`
   mutation addPost($content: String!) {
      addPost(content: $content) {
         _id
         content
         username
         date
      }
   }
`;

export const ADD_COMMENT = gql`
   mutation ($postID: ID!, $content: String!) {
      addComment(postId: $postId, content: $content) {
         _id
         content
         username
         comments {
            id
            content
            username
         }
      }
   }
`;

export const REMOVE_POST = gql`
   mutation removePost($postId: ID!) {
      removePost(postId: $postId)
   }
`;

export const REMOVE_COMMENT = gql`
   mutation removeComment($commentId: ID!) {
      removeComment(commentId: $commentId) {
         id
         comments {
            id
            username
            content
         }
         commentCount
      }
   }
`;

export const LIKE_POST = gql`
   mutation likePost($postId: ID!) {
      likePost(postId: $postId) {
         id
         likes {
            id
            username
         }
         likeCount
      }
   }
`;

export const LIKE_COMMENT = gql`
   mutation likeCommnet($commentId: ID!) {
      likeComment(commentId: $commentId) {
         id
         like {
            id
            username
         }
         likeCount
      }
   }
`;
