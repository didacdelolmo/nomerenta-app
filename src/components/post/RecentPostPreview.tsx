import { Link, useNavigate } from 'react-router-dom';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import Post from '../../store/types/post-interface';
import User from '../../store/types/user-interface';
import { formatDistanceToNow } from 'date-fns';
import usePostVote from '../../hooks/post/use-post-vote';
import useUserRoleColorClass from '../../hooks/user/use-user-role-class';
import { es } from 'date-fns/locale';
import SafeHtml from '../SafeHtml';
import { MessageCircle, ThumbsDown, ThumbsUp } from 'lucide-react';

export default function RecentPostPreview({ post }: { post: Post }) {
  const {
    _id,
    title,
    content,
    score,
    format,
    createdAt: date,
    commentsCount: commentCount,
  } = post;
  const author = post.author as User;
  const { avatar } = useUserAvatarURL({ user: author });
  const { roleColorClass } = useUserRoleColorClass({ user: author });

  const { hasUpvoted, hasDownvoted, handleUpvote, handleDownvote } =
    usePostVote({ post });

  const navigate = useNavigate();

  return (
    <Link
      to={`/posts/${_id}`}
      className="flex gap-5 p-2 hover:bg-gray-100 hover:cursor-pointer break-smart w-full"
    >
      <div className="flex flex-col items-center gap-1">
        <div
          onClick={handleUpvote}
          className={`${hasUpvoted && 'text-blue-600'} flex`}
        >
          <ThumbsUp strokeWidth={1.5} className="size-5" />
        </div>
        <span className="text-xl font-semibold">{score}</span>
        <div
          onClick={handleDownvote}
          className={`${hasDownvoted && 'text-red-600'} flex`}
        >
          <ThumbsDown strokeWidth={1.5} className="size-5" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between w-full gap-2">
        <div className="flex flex-col flex-grow min-w-0 justify-between gap-2">
          <h2 className="m-0 tracking-tight leading-tight text-2xl font-bold">
            No me renta {title}
          </h2>
          <div className="line-clamp-2 text-gray-800">
            {format ? <SafeHtml html={content} /> : content}
          </div>
        </div>
        <div className="order-first md:order-last self-start flex flex-col flex-shrink-0 items-end justify-between gap-1 md:gap-0 md:h-full">
          <div className="flex flex-col items-start md:items-end">
            <div className="flex gap-2 items-center">
              <span
                onClick={(e) => {
                  e.preventDefault();
                  navigate(`/users/${author._id}`);
                }}
                className={`${roleColorClass} font-bold hover:underline order-last md:order-first`}
              >
                {author.username}
              </span>
              <img
                className="rounded-full"
                height={32}
                width={32}
                src={avatar}
                alt="Avatar"
              />
            </div>
            <span className="text-gray-800">
              Hace {formatDistanceToNow(date, { locale: es })}
            </span>
          </div>
          <div className="flex items-end self-start md:self-end">
            <MessageCircle strokeWidth={1.5} className="size-4" />
            <span className="leading-none">{commentCount}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
