interface User {
  _id: string;
  username: string;
  avatar: string | null;
  anonymous: boolean;
}

export default User;
