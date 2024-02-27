import useGetRecentPaginatedPosts from '../../hooks/post/use-get-recent-paginated-posts';
import RecentPostPreview from './RecentPostPreview';

export default function RecentPosts() {
  const {
    posts,
    loadMorePosts,
    hasMore,
    isPending,
    isError,
    error,
  } = useGetRecentPaginatedPosts();

  return (
    <>
      {posts &&
        posts.map((post, index) => (
          <RecentPostPreview key={index} post={post} />
        ))}
      {isError && (
        <span className="text-red-600 underline">{error?.message}</span>
      )}
      {isPending && <span>Cargando...</span>}
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
  );
}
