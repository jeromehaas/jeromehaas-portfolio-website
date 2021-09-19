import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://craft-portfolio/",
    cache: new InMemoryCache({resultCaching: false}),
		skipSSLValidation: true
});

export default client;