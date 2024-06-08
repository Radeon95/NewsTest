import { ApolloClient, InMemoryCache, HttpLink, gql } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://point.md/graphql",
  }),
  cache: new InMemoryCache(),
});

export const GET_ARTICLES = gql`
  query GetArticles($skip: Int!, $take: Int!) {
    contents(
      project_id: "5107de83-f208-4ca4-87ed-9b69d58d16e1"
      lang: "ru"
      skip: $skip
      take: $take
    ) {
      id

      title {
        short
      }
    }
  }
`;

client
  .query({
    query: GET_ARTICLES,
    variables: {
      skip: 0,
      take: 10,
    },
  })
  .then((response) => {
    console.log("Fetched data:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

export default client;
