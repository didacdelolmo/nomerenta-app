interface User {
  _id: string;
  username: string;
  avatar: string | null;
  roleId: Role;
  anonymous: boolean;
}

type Role = 'member' | 'premium';

export default User;
