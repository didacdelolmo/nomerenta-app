import classNames from 'classnames';

export default function useUserRoleColorClass({ user }) {
  const { roleId } = user;

  const roleColorClass = classNames({
    'text-yellow-600': roleId === 'premium',
    'text-pink-600': roleId === 'editor',
    'text-teal-600': roleId === 'judge',
    'text-blue-600': roleId === 'police_officer',
    'text-purple-600': roleId === 'professor',
    'text-lime-600': roleId === 'dealer',
    'text-red-600': roleId === 'dictator',
  });

  return { roleColorClass };
}
