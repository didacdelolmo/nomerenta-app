import useGetPostsQuery from '../../api/queries/post/use-get-posts-query';
import PopularPostPreview from './PopularPostPreview';

export default function PopularPosts() {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetPostsQuery({
    sortBy: 'score',
    start: 0,
    limit: 5,
  });

  return (
    <>
      {isPending && <span>Cargando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error.message}</span>
      )}
      {isSuccess && (
        <div className='flex flex-col gap-2'>
          {response.data.map((post, index) => (
            <PopularPostPreview key={index} post={post} />
          ))}
        </div>
      )}
    </>
  );
}
