import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://craft-portfolio:8888/api",
    cache: new InMemoryCache(),
});

export default client;