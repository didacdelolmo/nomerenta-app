import { formatDistanceToNow } from 'date-fns';
import useUserAvatarURL from '../../hooks/user/useUserAvatarURL';
import Comment from '../../store/types/comment-interface';
import User from '../../store/types/user-interface';
import { es } from 'date-fns/locale';
import CreateComment from './CreateComment';
import useToggler from '../../hooks/use-toggler';
import useCommentVote from '../../hooks/comment/use-comment-vote';

export default function CommentContent({ comment }: { comment: Comment }) {
  const { _id: parentId, content, score, replies, createdAt: date } = comment;

  const postId = comment.post as string;
  const author = comment.author as unknown as User;

  const avatar = useUserAvatarURL({ user: author });

  const { isToggled, handleToggle } = useToggler();

  const { hasUpvoted, hasDownvoted, handleUpvote, handleDownvote } =
    useCommentVote({ comment });

  return (
    <div className="flex gap-2">
      <div className="flex flex-col">
        <img height={48} width={48} src={avatar} alt="Avatar" />
        <hr className="h-full" />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col my-2">
            <span className="font-bold">{author.username}</span>
            <span>Hace {formatDistanceToNow(date, { locale: es })}</span>
          </div>
          <p className="m-0 text-lg leading-6">{content}</p>
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <div
                onClick={handleUpvote}
                className={`${
                  hasUpvoted && 'text-blue-600'
                } hover:text-blue-600 hover:cursor-pointer flex`}
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
                    d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">{score}</span>
              <div
                onClick={handleDownvote}
                className={`${
                  hasDownvoted && 'text-red-600'
                } hover:text-red-600 hover:cursor-pointer flex`}
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
                    d="M7.498 15.25H4.372c-1.026 0-1.945-.694-2.054-1.715a12.137 12.137 0 0 1-.068-1.285c0-2.848.992-5.464 2.649-7.521C5.287 4.247 5.886 4 6.504 4h4.016a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23h1.294M7.498 15.25c.618 0 .991.724.725 1.282A7.471 7.471 0 0 0 7.5 19.75 2.25 2.25 0 0 0 9.75 22a.75.75 0 0 0 .75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 0 0 2.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384m-10.253 1.5H9.7m8.075-9.75c.01.05.027.1.05.148.593 1.2.925 2.55.925 3.977 0 1.487-.36 2.89-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398-.306.774-1.086 1.227-1.918 1.227h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 0 0 .303-.54"
                  />
                </svg>
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
              parentId={parentId}
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