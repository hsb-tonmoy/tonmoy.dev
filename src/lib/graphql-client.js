import { GraphQLClient } from 'graphql-request';
const GRAPHQL_ENDPOINT = process.env['API_URL'];

export const client = new GraphQLClient(GRAPHQL_ENDPOINT);
