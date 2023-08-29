export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostDetailProps = {
  post: Post;
  goBack: () => void;
};
