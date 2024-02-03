import User from './user-interface';

interface Post {
  author: string | User;
  title: string;
  content: string;
  upvotes: string[] | User[];
  downvotes: string[] | User[];
  score: number;
  comments?: Comment[] // not hierarchical
}

export default Post;
