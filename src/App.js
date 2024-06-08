import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Articles from "./News";

function App() {
  return (
    <ApolloProvider client={client}>
      <Articles />
    </ApolloProvider>
  );
}

export default App;
