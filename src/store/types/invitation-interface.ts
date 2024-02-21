import User from './user-interface';

interface Invitation {
  owner: User | null;
  target: User | null;
  code: string;
  expirationDate: Date | null;
  reusable: boolean;
  redeemed: boolean;
}

export default Invitation;
