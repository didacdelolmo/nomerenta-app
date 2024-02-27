import useGetCurrentUserPaginatedFollowsPosts from '../../hooks/post/use-get-current-user-paginated-follows-posts';
import RecentPostPreview from './RecentPostPreview';

export default function FollowsPosts() {
  const { posts, loadMorePosts, hasMore, isPending, isError, error } =
    useGetCurrentUserPaginatedFollowsPosts();

  return (
    <>
      {posts &&
        posts.map((post, index) => (
          <RecentPostPreview key={index} post={post} />
        ))}
      {posts.length <= 0 && <span className='text-center p-2 italic text-lg font-medium'>No hay nada aquí...</span>}
      {isError && (
        <span className="text-red-600 underline">{error?.message}</span>
      )}
      {isPending && <span>Cargando...</span>}
      {posts.length >= 1 && (
        <>
          {!hasMore ? (
            <span className="text-center py-2 italic text-lg font-medium">
              Has llegado al fin...
            </span>
          ) : (
            <button
              onClick={loadMorePosts}
              className="text-xl font-bold py-1.5 hover:bg-black hover:text-white"
            >
              Cargar más publicaciones
            </button>
          )}
        </>
      )}
    </>
  );
}
