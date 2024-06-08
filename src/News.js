import React, { useState, useEffect, useCallback } from "react";
import { useQuery } from "@apollo/client";
import { GET_ARTICLES } from "./apolloClient";
import { useInView } from "react-intersection-observer";
import {
  List,
  Item,
  Title,
  Time,
  Image,
  Logo,
  LogoContainer,
  Content,
  Description,
} from "./style";
import birdImg from "./img/7.jpg";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [skip, setSkip] = useState(0);
  const take = 10;

  const { data, loading, fetchMore } = useQuery(GET_ARTICLES, {
    variables: { skip, take },
  });
  // console.log(data);

  useEffect(() => {
    if (data) {
      console.log("Fetched data:", data);
      setArticles((articles) => [...articles, ...data.contents]);
    }
  }, [data]);

  const loadMore = useCallback(() => {
    setSkip((skip) => skip + take);
    fetchMore({
      variables: {
        skip: skip + take,
      },
    });
  }, [fetchMore, skip, take]);

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView && !loading) {
      loadMore();
    }
  }, [inView, loading, loadMore]);

  return (
    <List>
      {articles.map((article) => (
        <Item key={article.id}>
          <Image
            src="https://th.bing.com/th/id/OIP.cKTq4enAGO_Wg_Omp0ysngAAAA?rs=1&pid=ImgDetMain"
            alt={article.title.short}
          />
          <Content>
            <Title>{article.title.short}</Title>
            <Description>{article.title.short}</Description>
            <LogoContainer>
              <Logo src={birdImg} alt="logo" />
              <Time>{new Date().toLocaleString()}</Time>
            </LogoContainer>
          </Content>
        </Item>
      ))}
      {loading && <p>Loading...</p>}
      <div ref={ref} style={{ height: "20px" }}></div>
    </List>
  );
};

export default Articles;
