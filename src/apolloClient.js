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
      cparent {
        id
        url {
          ru
        }
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
      cparent {
        id
        url {
          ru
        }
      }
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

export default client;
