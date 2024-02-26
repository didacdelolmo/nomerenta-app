import useGetUserFollows from '../../api/queries/user/use-get-user-follows-query';
import User from '../../store/types/user-interface';
import ProfilePreview from './ProfilePreview';

export default function ProfileFollows({ user }: { user: User }) {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetUserFollows({ userId: user._id });

  return (
    <>
      {isPending && <span>Cargando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
      {isSuccess && (
        <div className='flex flex-col divide-y divide-gray-600'>
          {response.data.following.map((follow, index) => (
            <ProfilePreview key={index} user={follow} />
          ))}
        </div>
      )}
    </>
  );
}
