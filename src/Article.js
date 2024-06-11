import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_ARTICLE_BY_ID } from "./apolloClient";
import { Title, PageImage, List, Description } from "./style";
import birdImg from "./img/7.jpg";

function Article() {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_ARTICLE_BY_ID, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data || !data.content) return <p>No data available</p>;

  const article = data.content;
  return (
    <List>
      <Title>{article.title.short}</Title>
      <Description>{article.title.short}</Description>
      <PageImage src={birdImg} alt={article.title.short} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        vehicula dolor vitae quam interdum, at scelerisque justo facilisis.
        Phasellus efficitur, arcu at fermentum porttitor, metus turpis varius
        nisi, non facilisis risus arcu ut magna. Cras non volutpat justo. Sed
        fermentum auctor libero. Ut et nibh sed risus gravida condimentum.
        Nullam viverra sollicitudin lorem, et vulputate risus suscipit et. Sed
        venenatis dignissim nulla, eget vehicula lacus tincidunt a. Aliquam erat
        volutpat. Duis et nisi quis mauris sodales eleifend. Curabitur ut
        ullamcorper turpis. Fusce elementum, erat a scelerisque gravida, felis
        odio bibendum sapien, non ultrices neque arcu a urna. Sed eget justo
        vitae libero dapibus molestie. Mauris faucibus metus nec magna auctor
        finibus. Vivamus ullamcorper purus at tellus pharetra, id egestas est
        consectetur. Proin consectetur luctus tortor, nec luctus libero posuere
        vel. Nullam id lacinia risus. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Vivamus et urna at sem
        pretium sodales. Praesent quis mauris augue. Morbi et sem nec ligula
        fermentum aliquet vel eget tortor. Etiam mollis mauris sit amet nisi
        scelerisque, a suscipit arcu viverra. Curabitur eu metus at metus
        gravida consequat. Donec viverra lacus in libero hendrerit suscipit.
      </p>
    </List>
  );
}

export default Article;
