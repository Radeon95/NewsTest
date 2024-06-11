import React from "react";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import News from "./News";
import Article from "./Article";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={News} />
          <Route path="/article/:id" Component={Article} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
