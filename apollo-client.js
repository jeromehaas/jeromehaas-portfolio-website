import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://xygqpmykv.cyon.link/api",
    cache: new InMemoryCache({resultCaching: false}),
		skipSSLValidation: true
});

export default client;