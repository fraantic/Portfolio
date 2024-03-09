import { gql } from "@/app/lib/gql";

export const CreateTimerMutation = gql(/* GraphQL */ `
  mutation CreateTimer($timeSince: Int!) {
    CreateTimer(timeSince: $timeSince) {
      createdAt
      id
      timeSince
    }
  }
`);

export const UpdateTimer = gql(/* GraphQL */ `
  mutation updateTimer($timeSince: Int!) {
    updateTodo(timeSince: $timeSince) {
      id
      createdAt
      timeSince
    }
  }
`);
