import { gql } from "apollo-boost";

const CREATE_FEEDBACK = gql`
  mutation createFeedback($content: String!) {
    createFeedback(content: $content) {
      content
    }
  }
`;

export default CREATE_FEEDBACK;
