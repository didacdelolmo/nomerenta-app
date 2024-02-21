import Post from "./post-interface";

enum Role {
  MEMBER = 'member',
  PREMIUM = 'premium',
  EDITOR = 'editor',
  JUDGE = 'judge',
  POLICE_OFFICER = 'police_officer',
  PROFESSOR = 'professor',
  DEALER = 'dealer',
  DICTATOR = 'dictator',
}

interface User {
  _id: string;
  username: string;
  avatar: string | null;
  roleId: Role;
  flair: string | null;
  biography: string | null;
  following: User[];
  followers: User[];
  bookmarks: {
    posts: Post[];
    comments: Comment[];
  }
}
export default User;
