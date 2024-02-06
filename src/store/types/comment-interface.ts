import Post from './post-interface';
import User from './user-interface';

interface Comment {
  author: string | User[];
  post: string | Post[];
  parent: string | Comment[];
  content: string;
  upvotes: string[] | User[];
  downvotes: string[] | User[];
  score: number;
  createdAt: Date;
}

export default Comment;
