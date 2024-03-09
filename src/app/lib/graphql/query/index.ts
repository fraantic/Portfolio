import { gql } from "@/app/lib/gql";

export const getTimerQuery = gql( `
  query TimerQuery {
    timer {
      id
      createdAt
      timeSince
    }
  }
`);
