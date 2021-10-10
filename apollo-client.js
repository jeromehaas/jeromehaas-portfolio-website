import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://craft.jeromehaas.dev/api",
    cache: new InMemoryCache({resultCaching: false}),
		skipSSLValidation: true
});

export default client;