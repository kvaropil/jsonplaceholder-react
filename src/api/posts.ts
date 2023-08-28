import { Post } from '../types';
import { api } from './index';
import { AxiosError } from 'axios';

export const getPosts = (limit: number = 10): Promise<Post[]> => {
  return api
    .get<Post[]>(`/posts?_limit=${limit}`)
    .then((response) => response.data)
    .catch((error: AxiosError) => {
      console.error('Error fetching posts:', error);
      throw error;
    });
};
