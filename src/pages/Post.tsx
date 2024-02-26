import { useParams } from 'react-router-dom';
import PopularPosts from '../components/post/PopularPosts';
import useGetPostByIdQuery from '../api/queries/post/use-get-post-by-id-query';
import PostContent from '../components/post/PostContent';

export default function Post() {
  const { postId } = useParams();
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetPostByIdQuery({ postId });

  return (
    <div className="flex flex-col md:grid grid-cols-4 grid-flow-row divide-x divide-gray-600">
      <div className="col-span-3">
        {isPending && <span>Cargando...</span>}
        {isError && (
          <span className="text-red-600 underline">{error.message}</span>
        )}
        {isSuccess && <PostContent post={response.data} />}
      </div>
      <div className="hidden md:grid col-span-1 pl-2">
        <PopularPosts />
      </div>
    </div>
  );
}
