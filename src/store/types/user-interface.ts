interface User {
  _id: string;
  username: string;
  avatar: string | null;
  roleId: 'member' | 'premium' | 'admin' | 'boss';
  biography: string | null;
  flair: string | null;
  anonymous: boolean;
}
export default User;
