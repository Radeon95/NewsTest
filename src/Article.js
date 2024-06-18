import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTICLE_BY_ID } from "./apolloClient";
import {
  ArticleTitle,
  PageImage,
  ListArticle,
  ArticleDescription,
  Eye,
  SeenBlock,
  SourceLink,
  ArticleLogo,
  ArticleTime,
  LogoBlock,
  SeenDiv,
  ArticleContent,
  Source,
  ArticleLogoBottom,
  Caption,
} from "./style";
import parse from "html-react-parser";
import eye from "./img/eye.svg";
import { formatNumber, formatSource, formatArticleDate } from "./utils";
function Article() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.content) return <p>No data available</p>;

  const article = data.content;
  const sourceData = article.parents[1];
  const { displayText, link } = formatSource(sourceData.url.ru);

  return (
    <ListArticle>
      <SeenBlock>
        <LogoBlock>
          <ArticleLogo
            src={`https://i.simpalsmedia.com/point.md/logo/${article.parents[1].attachment}`}
            alt="logo"
          />
          <SourceLink
            href={`https://${link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {displayText}
          </SourceLink>
        </LogoBlock>
        <ArticleTime>{formatArticleDate(article.dates.posted)}</ArticleTime>
        <SeenDiv>
          <Eye src={eye} alt="eye" />
          <span
            style={{
              alignItems: "center",
              marginLeft: "5px",
              color: "rgb(128, 128, 128)",
              fontSize: "16px",
            }}
          >
            {formatNumber(article.counters.view)}
          </span>
        </SeenDiv>
      </SeenBlock>
      <ArticleTitle>{article.title.short}</ArticleTitle>
      <ArticleDescription>{article.description.intro}</ArticleDescription>
      <PageImage
        src={`https://i.simpalsmedia.com/point.md/news/900x900/${article.thumbnail}`}
        alt={article.title.short}
      />
      <Caption>{article.title.short}</Caption>
      <ArticleContent className="parsed-content">
        {parse(article.description.long)}
      </ArticleContent>
      <LogoBlock>
        <Source> Источник</Source>
        <ArticleLogoBottom
          src={`https://i.simpalsmedia.com/point.md/logo/${article.parents[1].attachment}`}
          alt="logo"
        />
        <SourceLink
          href={`https://${link}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {displayText}
        </SourceLink>
      </LogoBlock>
    </ListArticle>
  );
}

export default Article;
