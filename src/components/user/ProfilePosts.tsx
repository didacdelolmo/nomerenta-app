import useGetUserPosts from '../../api/queries/post/use-get-user-posts-query';
import User from '../../store/types/user-interface';
import RecentPostPreview from '../post/RecentPostPreview';

export default function ProfilePosts({ user }: { user: User }) {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetUserPosts({ userId: user._id });

  return (
    <>
      {isPending && <span>Cargando...</span>}
      {isError && <span>{error.message}</span>}
      {isSuccess && (
        <div className='flex flex-col gap-2'>
          {response.data.map((post, index) => (
            <RecentPostPreview key={index} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
