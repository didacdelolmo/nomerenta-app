import Post from "./post-interface";
import User from "./user-interface";

interface Comment {
  author: string | User[]
  post: string | Post[]
  parent: string | Comment[]
  content: string
}

export default Comment;