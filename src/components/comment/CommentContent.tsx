import { formatDistanceToNow } from 'date-fns';
import useUserAvatarURL from '../../hooks/user/useUserAvatarURL';
import Comment from '../../store/types/comment-interface';
import User from '../../store/types/user-interface';
import { es } from 'date-fns/locale';
import CreateComment from './CreateComment';
import useToggler from '../../hooks/useToggler';

export default function CommentContent({ comment }: { comment: Comment }) {
  const { _id: parentId, content, score, replies, createdAt: date } = comment;

  const postId = comment.post as string;
  const author = comment.author as unknown as User;

  const avatar = useUserAvatarURL({ user: author });

  const { isToggled, handleToggle } = useToggler();

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
            <div className="flex items-center gap-1">
              <div className="hover:cursor-pointer hover:text-blue-600 flex">
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
                    d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                  />
                </svg>
              </div>
              <span className="text-lg font-medium">{score}</span>
              <div className="hover:cursor-pointer hover:text-red-600 flex">
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
                    d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
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
        {replies.map((reply) => (
          <CommentContent comment={reply} />
        ))}
      </div>
    </div>
  );
}
