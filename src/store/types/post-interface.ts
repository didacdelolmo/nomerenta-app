import User from './user-interface';

interface Post {
  _id: string;
  author: string | User;
  title: string;
  content: string;
  upvotes: string[] | User[];
  downvotes: string[] | User[];
  score: number;
  commentsCount: number;
  format: boolean;
  featuredUntil: Date;
  createdAt: Date;
}

export default Post;
