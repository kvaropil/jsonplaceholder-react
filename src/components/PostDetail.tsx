import React from 'react';
import styled from 'styled-components';
import { PostDetailProps } from '../types';

const DetailContainer = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  padding: 20px;
  border-radius: 5px;
`;

const DetailTitle = styled.h1`
  color: ${(props) => props.theme.colors.main};
  margin-bottom: 15px;
  font-size: 2em;
`;

const DetailBody = styled.p`
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 20px;
  font-size: 1.2em;
  line-height: 1.5;
`;

const GoBackButton = styled.button`
  background-color: ${(props) => props.theme.colors.main};
  color: ${(props) => props.theme.colors.white};
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.mainDimmed};
  }
`;

export const PostDetail: React.FC<PostDetailProps> = ({ post, goBack }) => {
  return (
    <DetailContainer>
      <DetailTitle>{post.title}</DetailTitle>
      <DetailBody>{post.body}</DetailBody>
      <GoBackButton onClick={goBack}>Go Back</GoBackButton>
    </DetailContainer>
  );
};
