import useGetPostsQuery from '../../api/queries/user-get-posts-query';
import RecentPostPreview from './RecentPostPreview';

export default function RecentPosts() {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetPostsQuery({
    sortBy: 'score',
    start: 0,
    limit: 20,
  });

  return (
    <div className="flex flex-col gap-2">
      {isPending && <span>Cargando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
      {isSuccess &&
        response.data.map((post, index) => (
          <RecentPostPreview key={index} post={post} />
        ))}
    </div>
  );
}
