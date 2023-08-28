import React, { useEffect, useState } from 'react';
import { Post } from '../types';
import { getPosts } from '../api/posts';
import styled from 'styled-components';
import { shortenText } from '../utils';

const Container = styled.div`
  background-color: ${(props) => props.theme.colors.grey};
  padding: 20px;
  border-radius: 5px;
`;

const PostContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid ${(props) => props.theme.colors.main};
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 15px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.main};
  margin-bottom: 10px;
`;

const Body = styled.p`
  color: ${(props) => props.theme.colors.black};
`;

export const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getPosts()
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((getPostsError) => {
        console.error(`getPosts error: ${getPostsError}`);
        setError('Error appeared during loading posts');
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error appeared during loading posts.</p>;
  }

  return (
    <Container>
      {posts.length == 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <PostContainer key={post.id}>
            <Title>{post.title}</Title>
            <Body>{shortenText(post.body)}</Body>
          </PostContainer>
        ))
      )}
    </Container>
  );
};
