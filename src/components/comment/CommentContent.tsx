import { formatDistanceToNow } from 'date-fns';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import Comment from '../../store/types/comment-interface';
import User from '../../store/types/user-interface';
import { es } from 'date-fns/locale';
import CreateComment from './CreateComment';
import useToggler from '../../hooks/use-toggler';
import useCommentVote from '../../hooks/comment/use-comment-vote';
import { Link } from 'react-router-dom';
import useUserRoleColorClass from '../../hooks/user/use-user-role-class';
import SafeHtml from '../SafeHtml';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

export default function CommentContent({ comment }: { comment: Comment }) {
  const { _id, content, score, replies, format, createdAt: date } = comment;

  const postId = comment.post as string;
  const author = comment.author as unknown as User;

  const { roleColorClass } = useUserRoleColorClass({ user: author });
  const { avatar } = useUserAvatarURL({ user: author });

  const { isToggled, handleToggle } = useToggler();

  const { hasUpvoted, hasDownvoted, handleUpvote, handleDownvote } =
    useCommentVote({ comment });

  return (
    <div id={_id} className="flex gap-2 break-smart">
      <div className="flex flex-col items-center gap-2">
        <Link to={`/users/${author._id}`}>
          <img
            className="rounded-full"
            height={48}
            width={48}
            src={avatar}
            alt="Avatar"
          />
        </Link>
        <hr className="h-full w-[1px] bg-gray-600" />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <Link
                to={`/users/${author._id}`}
                className={`${roleColorClass}  font-bold hover:underline w-fit`}
              >
                {author.username}
              </Link>
              <span>Hace {formatDistanceToNow(date, { locale: es })}</span>
            </div>
          </div>
          {author.flair && (
            <span className="italic bg-gray-100 w-fit px-2 rounded-md">
              {author.flair}
            </span>
          )}
          <p className="m-0 text-lg leading-6 text-gray-800">
            {format ? <SafeHtml html={content} /> : content}
          </p>
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <div
                onClick={handleUpvote}
                className={`${
                  hasUpvoted && 'text-blue-600'
                } hover:text-blue-600 hover:cursor-pointer flex`}
              >
                <ThumbsUp strokeWidth={1.5} className="size-5" />
              </div>
              <span className="text-lg font-semibold">{score}</span>
              <div
                onClick={handleDownvote}
                className={`${
                  hasDownvoted && 'text-red-600'
                } hover:text-red-600 hover:cursor-pointer flex`}
              >
                <ThumbsDown strokeWidth={1.5} className="size-5" />
              </div>
            </div>
            <div
              onClick={handleToggle}
              className="flex items-end gap-1 hover:cursor-pointer hover:underline"
            >
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
              <span className="text-lg leading-none">Responder</span>
            </div>
          </div>
        </div>
        <div className={`${isToggled ? 'flex gap-5' : 'hidden'}`}>
          <hr />
          <div className="flex-1">
            <CreateComment
              postId={postId}
              parentId={_id}
              onSuccessCallback={handleToggle}
            />
          </div>
        </div>
        {replies.map((reply, index) => (
          <CommentContent key={index} comment={reply} />
        ))}
      </div>
    </div>
  );
}
