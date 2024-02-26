import Comment from './comment-interface';
import Post from './post-interface';
import User from './user-interface';

interface Notification {
  _id: string;
  sender: User | string | null;
  target: User | string | null;
  post: Post | string | null;
  comment: Comment | string | null;
  message: string;
  seen: boolean;
  createdAt: Date;
}

export default Notification;
