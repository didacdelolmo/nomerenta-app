import Post from './post-interface';
import User from './user-interface';

interface Comment {
  _id: string;
  author: string | User[];
  post: string | Post;
  parent: string | Comment[];
  content: string;
  upvotes: string[] | User[];
  downvotes: string[] | User[];
  score: number;
  replies: Comment[];
  createdAt: Date;
}

export default Comment;
