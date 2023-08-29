import React, { useEffect, useState } from 'react';
import { Post } from '../types';
import { getPosts } from '../api/posts';
import styled from 'styled-components';
import { shortenText } from '../utils';
import { PostDetail } from './PostDetail';

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

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); // semi-transparent black
  backdrop-filter: blur(5px); // Apply blur effect
  display: flex;
  align-items: center;
  justify-content: center; // Childs element (modal) get centered
  z-index: 10;
`;

const Modal = styled.div`
  width: 80%;
  max-width: 600px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3); // Add shadow
`;

export const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

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

  const closeModal = () => {
    setSelectedPost(null);
  };

  const onOverlayClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error appeared during loading posts.</p>;
  }

  return (
    <>
      <Container>
        {posts.length == 0 ? (
          <p>No posts available</p>
        ) : (
          posts.map((post) => (
            <PostContainer key={post.id} onClick={() => setSelectedPost(post)}>
              <Title>{post.title}</Title>
              <Body>{shortenText(post.body)}</Body>
            </PostContainer>
          ))
        )}
      </Container>

      {selectedPost && (
        <Overlay onClick={onOverlayClick}>
          <Modal>
            <PostDetail
              post={selectedPost}
              goBack={() => setSelectedPost(null)}
            />
          </Modal>
        </Overlay>
      )}
    </>
  );
};
