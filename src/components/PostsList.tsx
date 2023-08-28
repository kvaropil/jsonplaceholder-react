import React, { useEffect, useState } from 'react';
import { Post } from '../types';
import { getPosts } from '../api/posts';

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
    <div>
      {posts.length == 0 ? (
        <p>No posts available</p>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
};
