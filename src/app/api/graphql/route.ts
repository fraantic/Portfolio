import { ApolloServer } from "@apollo/server";
import { NextRequest } from "next/server";
import prisma from "@/app/lib/prisma";
import { startServerAndCreateNextHandler } from "@as-integrations/next";

const typeDefs = `#graphql
  type Timer {
    id: String!
    createdAt: String!
    timeSince: Int!
  }

  type Query {
    timer: [Timer!]!
  }

  type Mutation {
    CreateTimer(timeSince: Int!): Timer!
    UpdateTimer(timeSince: Int!): Timer!
  }
`;

const resolvers = {
  Query: {
    timer: async () => prisma.timer.findMany(),
  },
  Mutation: {
    CreateTimer: async (_: never, args: { timeSince: number }) => {
      const createTimer = await prisma.timer.create({
        data: {
          timeSince: args.timeSince,
        },
      });
      return createTimer;
    },
    UpdateTimer: async (_: never, args: { timeSince: number }) => {
      const updatedTimer = await prisma.timer.update({
        data: {
          timeSince: args.timeSince,
        },
        where: {
          id: "cltk816hw0000p3crhdhs6fyx",
        },
      });
      return updatedTimer;
    },
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const handler = startServerAndCreateNextHandler<NextRequest>(apolloServer);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
