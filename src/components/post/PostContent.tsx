import useGetPostComments from '../../api/queries/comment/use-get-post-comments-query';
import usePostVote from '../../hooks/post/use-post-vote';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import Post from '../../store/types/post-interface';
import User from '../../store/types/user-interface';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';
import { es } from 'date-fns/locale';
import CreateComment from '../comment/CreateComment';
import CommentComment from '../comment/CommentContent';
import { Link } from 'react-router-dom';
import useUserRoleColorClass from '../../hooks/user/use-user-role-class';
import SafeHtml from '../SafeHtml';
import useShare from '../../hooks/use-share';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

export default function PostContent({ post }: { post: Post }) {
  const {
    _id,
    title,
    content,
    score,
    format,
    commentsCount: commentCount,
    createdAt: date,
  } = post;

  const author = post.author as User;
  const { avatar } = useUserAvatarURL({ user: author });
  const { roleColorClass } = useUserRoleColorClass({ user: author });

  const { hasUpvoted, hasDownvoted, handleUpvote, handleDownvote } =
    usePostVote({ post });

  const {
    data: response,
    isPending,
    isError,
    error,
    isSuccess,
  } = useGetPostComments({ postId: _id });

  const { handleShare } = useShare({
    title: 'NOMERENTA.com',
    text: 'Mira esta publicación que he encontrado...',
    url: `https://nomerenta.com/posts/${_id}`,
  });

  return (
    <div className="flex flex-col divide-y divide-gray-600 break-smart">
      <div className="flex gap-5 p-2">
        <div className="flex flex-col items-center gap-1">
          <div
            onClick={handleUpvote}
            className={`${
              hasUpvoted && 'text-blue-600'
            } hover:text-blue-600 hover:cursor-pointer flex`}
          >
            <ThumbsUp strokeWidth={1.5} className="size-6" />
          </div>
          <span className="text-xl font-semibold">{score}</span>
          <div
            onClick={handleDownvote}
            className={`${
              hasDownvoted && 'text-red-600'
            } hover:text-red-600 hover:cursor-pointer flex`}
          >
            <ThumbsDown strokeWidth={1.5} className="size-6" />
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2">
              <Link to={`/users/${author._id}`}>
                <img
                  className="rounded-full"
                  height={48}
                  width={48}
                  src={avatar}
                  alt="Avatar"
                />
              </Link>
              <div className="flex flex-col justify-evenly">
                <span>
                  Publicado por{' '}
                  <Link to={`/users/${author._id}`}>
                    <span
                      className={`${roleColorClass} font-bold hover:underline`}
                    >
                      {author.username}
                    </span>
                  </Link>
                </span>
                <span className="text-gray-800">
                  Hace {formatDistanceToNow(date, { locale: es })}
                </span>
              </div>
            </div>
            {author.flair && (
              <span className="italic bg-gray-100 px-2 w-fit rounded-md">
                {author.flair}
              </span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="m-0 tracking-tight text-2xl font-bold">
              No me renta {title}
            </h2>
            <div className="text-lg text-gray-800">
              {format ? <SafeHtml html={content} /> : content}
            </div>
          </div>
          <div className="flex gap-5">
            <div className="flex items-end gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
              <span className="text-lg leading-none">
                {commentCount} comentarios
              </span>
            </div>
            <div className="flex items-end gap-1 hover:underline hover:cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m15 15 6-6m0 0-6-6m6 6H9a6 6 0 0 0 0 12h3"
                />
              </svg>
              <span onClick={handleShare} className="text-lg leading-none">
                Compartir
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-2 gap-5">
        <CreateComment postId={_id} />
        {isPending && <span>Cargando comentarios...</span>}
        {isError && (
          <span className="text-red-600 underline">{error?.message}</span>
        )}
        {(isSuccess && response.data.length) >= 1 && (
          <div className="overflow-auto flex flex-col gap-5">
            {response?.data.map((comment, index) => (
              <CommentComment key={index} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
