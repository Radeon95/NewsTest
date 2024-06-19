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
  MainLogo,
} from "./style";
import logo from "./img/poinLogo.svg";
import { Link } from "react-router-dom";

import { formatTime, truncateText, formatDateOrToday } from "./utils";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (data) {
          const uniqueArticles = data.contents.filter(
            (article, i, el) => i === el.findIndex((a) => a.id === article.id)
          );

          uniqueArticles.sort((a, b) => b.dates.posted - a.dates.posted);

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

  let lastDateLabel = "";

  const formatDateOnly = (unixTimestamp) => {
    const date = new Date(unixTimestamp * 1000);
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  };

  return (
    <>
      <Link to="/">
        <MainLogo src={logo} alt="Point" />
      </Link>
      <List>
        {err && <p>{err}</p>}
        {!loading && complete && articles.length === 0 && !err && (
          <p>No news available</p>
        )}
        {loading && <p>Loading...</p>}
        {articles.map((article, i) => {
          const currentDateLabel = formatDateOrToday(article.dates.posted);
          const currentDateOnly = formatDateOnly(article.dates.posted);
          const showDateLabel = currentDateOnly !== lastDateLabel;
          lastDateLabel = showDateLabel ? currentDateOnly : lastDateLabel;

          return (
            <React.Fragment key={`${article.id} - ${i}`}>
              {showDateLabel && (
                <h2 style={{ fontSize: "30px" }}>{currentDateLabel}</h2>
              )}
              <Item>
                <Link
                  to={`/${article.cparent.url.ru}/${article.url}`}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <Image
                    src={`https://i.simpalsmedia.com/point.md/news/900x900/${article.thumbnail}`}
                    alt={article.title.short}
                  />
                </Link>
                <Content>
                  <Link
                    to={`/${article.cparent.url.ru}/${article.url}`}
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                  >
                    <Title>{article.title.short}</Title>
                  </Link>
                  <Description>
                    {truncateText(article.description.intro, 150)}
                  </Description>
                  <LogoContainer>
                    <Logo
                      src={`https://i.simpalsmedia.com/point.md/logo/${article.parents[1].attachment}`}
                      alt="logo"
                    />
                    <Time>{formatTime(article.dates.posted)}</Time>
                  </LogoContainer>
                </Content>
              </Item>
            </React.Fragment>
          );
        })}
        <div ref={ref} style={{ height: "20px" }}></div>
      </List>
    </>
  );
};

export default News;
