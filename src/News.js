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
import { Link } from "react-router-dom";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [skip, setSkip] = useState(0);
  const [err, setErr] = useState(null);
  const [complete, setComplete] = useState(false);
  const take = 10;

  const {
    data,
    loading,
    fetchMore,
    err: error,
  } = useQuery(GET_ARTICLES, {
    variables: { skip, take },
  });
  // console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          const uniqueArticles = data.contents.filter(
            (article, i, el) => i === el.findIndex((a) => a.id === article.id)
          );
          console.log("Fetched data:", data);
          setArticles((articles) => [...articles, ...uniqueArticles]);
          setComplete(true);
        }
      } catch (err) {
        setErr("Error fetching data. Try again!");
        setComplete(true);
      }
    };

    fetchData();
  }, [data, error]);

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
      {err && <p>{err}</p>}
      {!loading && complete && articles.length === 0 && !err && (
        <p> No news available</p>
      )}
      {loading && <p>Loading...</p>}
      {articles.map((article, i) => (
        <Item key={`${article.id} - ${i}`}>
          <Link
            to={`/article/${article.id}`}
            style={{
              display: "flex",
              alignItems: "flex-start",
              textDecoration: "none",
              color: "inherit",
            }}
          >
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
          </Link>
        </Item>
      ))}

      <div ref={ref} style={{ height: "20px" }}></div>
    </List>
  );
};

export default News;
