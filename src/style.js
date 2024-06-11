import styled from "styled-components";

export const List = styled.div`
  background-color: #fff;
  max-width: 800px;
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
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
  &:last-child {
    border-bottom: none;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  margin: 0 0 10px 0;
`;

export const Time = styled.p`
  font-size: 12px;
  color: #999;
  margin: 5px 0 5px 0;
`;

export const Image = styled.img`
  width: 200px;
  height: 150px;
  margin-right: 20px;
  object-fit: cover;
`;

export const Description = styled.p`
  margin: 0 0 10px 0;
`;

export const Logo = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
`;

export const PageImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  height: 50%;
  object-fit: cover;
`;
