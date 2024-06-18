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
      url
      title {
        short
      }
      dates {
        posted
      }
      description {
        intro
      }
      album {
        source
      }
      thumbnail
      parents {
        id

        attachment
        url {
          ru
        }
      }
    }
  }
`;
export const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($id: String!) {
    content(id: $id) {
      id

      title {
        short
      }
      url
      dates {
        posted
      }
      parents {
        id

        attachment
        url {
          ru
        }
      }
      description {
        intro
        long
        cut
      }
      thumbnail
      counters {
        view
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

client
  .query({
    query: GET_ARTICLE_BY_ID,
    variables: {
      id: "83b64c50-8af1-478e-a16f-c3f4520d7c3b",
    },
  })
  .then((response) => {
    console.log("Fetched data:", response.data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

export default client;
