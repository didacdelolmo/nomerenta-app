import classNames from 'classnames';

export default function useUserRoleColorClass({ user }) {
  const { roleId } = user;

  const roleColorClass = classNames({
    'text-yellow-600': roleId === 'premium',
    'text-red-600': roleId === 'admin',
    'text-purple-600': roleId === 'boss',
  });

  return { roleColorClass };
}
