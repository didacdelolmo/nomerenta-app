import classNames from 'classnames';

export default function useUserRoleClassColor({ user }) {
  const { roleId } = user;

  const classColor = classNames({
    'text-yellow-600': roleId === 'premium',
    'text-red-600': roleId === 'admin',
    'text-purple-600': roleId === 'boss',
  });

  return { classColor };
}
