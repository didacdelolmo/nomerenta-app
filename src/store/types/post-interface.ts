import User from './user-interface';

interface Post {
  _id: string;
  author: string | User;
  title: string;
  content: string;
  upvotes: string[] | User[];
  downvotes: string[] | User[];
  score: number;
  commentCount: number;
  createdAt: Date;
}

export default Post;
