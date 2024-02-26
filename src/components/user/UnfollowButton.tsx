import useUnfollowMutation from '../../api/mutations/user/use-unfollow-mutation';
import User from '../../store/types/user-interface';

export default function UnfollowButton({ target }: { target: User }) {
  const { mutate: unfollow, isError, error } = useUnfollowMutation();

  return (
    <div className="flex flex-col">
      <button
        onClick={() => unfollow({ userId: target._id })}
        className="w-full bg-gray-100 px-2 rounded-md border border-gray-600 hover:bg-gray-200"
      >
        Dejar de seguir
      </button>
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
    </div>
  );
}
