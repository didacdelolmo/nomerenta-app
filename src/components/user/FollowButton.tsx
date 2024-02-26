import useFollowMutation from '../../api/mutations/user/use-follow-mutation';
import User from '../../store/types/user-interface';

export default function FollowButton({ target }: { target: User }) {
  const { mutate: follow, isError, error } = useFollowMutation();

  return (
    <div className="flex flex-col">
      <button
        onClick={() => follow({ userId: target._id })}
        className="w-full bg-gray-100 px-2 rounded-md border border-gray-600 hover:bg-gray-200"
      >
        Seguir
      </button>
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
    </div>
  );
}
