import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_WORDPRESS_URL}graphql`,
});

// Apollo GraphQL client.
const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(),
});

export default client;
