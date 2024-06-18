import styled from "styled-components";

export const List = styled.div`
  background-color: #fff;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;
export const ListArticle = styled.div`
  background-color: #fff;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Item = styled.div`
  display: flex;
  align-items: flex-start;

  padding: 10px 0;
  &:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  line-height: 26px;
  position: relative;
  color: rgb(15, 23, 42);
  letter-spacing: 0px;
  margin: -2.5px 0px 8px;
  font-weight: 500;
  &:hover {
    color: red;
  }
`;

export const Time = styled.p`
  font-size: 12px;
  color: #999;
  margin: 5px 0 5px 0;
`;

export const Image = styled.img`
  width: 240px;
  height: 145px;

  margin-right: 20px;
  border-radius: 3px;
`;

export const Description = styled.p`
  margin: 0 0 10px 0;
  font-size: 18px;
`;

export const Logo = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 5px;
`;

export const PageImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;

  height: 50%;
  object-fit: cover;
`;

// Article
export const SeenBlock = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SourceLink = styled.a`
  text-decoration: none;
  color: blue; /* Text color blue */
  font-size: 16px;
  margin-right: 10px;
  margin-left: 10px;

  &:hover {
    color: red; /* Text color red on hover */
  }
`;

export const Eye = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const ArticleLogo = styled.img`
  height: 16px;
  border-radius: 2px;
  max-width: 100%;
  margin-bottom: -4px;
`;
export const LogoBlock = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

export const ArticleTime = styled.span`
  margin-right: 10px;
  color: rgb(128, 128, 128);
  font-size: 16px;
  line-height: 0;
  margin-left: 16px;
  letter-spacing: 0px;
  white-space: nowrap;
`;

export const SeenDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  margin-left: 16px;
`;

export const ArticleTitle = styled.h2`
  color: rgb(15, 23, 42);
  font-size: 40px;
  letter-spacing: -1px;
  line-height: 44px;
  font-weight: 700;
  margin: 12px 0px 0px;
`;

export const ArticleDescription = styled.p`
  color: rgb(15, 23, 42);
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0px;
  margin-top: 16px;
  margin-bottom: 24px;
  line-height: 28px;
`;
export const ArticleContent = styled.div`
  color: rgb(15, 23, 42);
  font-weight: 400;
  font-size: 22px;
  letter-spacing: 0px;
  line-height: 27px;
  font-family: Onest, sans-serif, Helvetica;
`;
export const Source = styled.p`
  color: rgb(128, 128, 128);
  font-size: 16px;
  line-height: 20px;
  margin-right: 8px;
`;

export const ArticleLogoBottom = styled.img`
  height: 16px;
  border-radius: 2px;
  margin-bottom: -4px;
  width: auto;
`;
export const Caption = styled.figcaption`
  width: 100%;
  color: rgb(128, 128, 128);
  font-size: 20px;
  letter-spacing: 0px;
  line-height: 16px;
  padding-top: 8px;
  word-break: break-word;
  margin-bottom: 24px;
`;

export const MainLogo = styled.img`
  display: block;
  width: 170px;
  height: 48px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 100px;
  padding-top: 100px;
`;
