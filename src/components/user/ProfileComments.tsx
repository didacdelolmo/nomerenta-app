import User from '../../store/types/user-interface';
import useGetUserCommentsQuery from '../../api/queries/comment/use-get-user-comments-query';
import CommentPreview from '../comment/CommentPreview';

export default function ProfileComments({ user }: { user: User }) {
  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetUserCommentsQuery({ userId: user._id });

  return (
    <>
      {isPending && <span>Cargando...</span>}
      {isError && <span>{error.message}</span>}
      {isSuccess && (
        <div className="flex flex-col gap-2">
          {response.data.map((comment, index) => (
            <CommentPreview key={index} comment={comment} />
          ))}
        </div>
      )}
    </>
  );
}
