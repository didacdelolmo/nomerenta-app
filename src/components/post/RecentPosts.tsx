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
    // isSuccess,
  } = useGetRecentPaginatedPosts();

  return (
    <div className="flex flex-col divide-y divide-gray-600">
      <h2 className="text-center text-2xl font-bold my-5">Publicaciones más recientes</h2>
      {posts &&
        posts.map((post, index) => (
          <RecentPostPreview key={index} post={post} />
        ))}
      {isError && (
        <span className="text-red-600 underline">{error?.message}</span>
      )}
      {isPending && <span>Cargando...</span>}
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
