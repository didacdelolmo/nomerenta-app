import useGetRecentPaginatedPosts from '../../hooks/post/use-get-paginated-posts';
import RecentPostPreview from './RecentPostPreview';

export default function RecentPosts() {
  const {
    posts,
    loadMorePosts,
    hasMore,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetRecentPaginatedPosts();

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-center">Publicaciones más recientes</h2>
      {isPending && <span>Cargando...</span>}
      {isError && (
        <span className="text-red-600 underline">{error?.message}</span>
      )}
      {isSuccess &&
        posts.map((post, index) => (
          <RecentPostPreview key={index} post={post} />
        ))}
      {!hasMore ? (
        <span className="text-center my-2 italic text-lg">
          Has llegado al fin...
        </span>
      ) : (
        <button onClick={loadMorePosts} className="text-xl font-bold">
          Cargar más publicaciones
        </button>
      )}
    </div>
  );
}
