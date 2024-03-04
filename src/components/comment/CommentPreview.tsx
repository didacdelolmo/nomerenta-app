import { formatDistanceToNow } from 'date-fns';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import Comment from '../../store/types/comment-interface';
import User from '../../store/types/user-interface';
import { es } from 'date-fns/locale';
import useCommentVote from '../../hooks/comment/use-comment-vote';
import { Link } from 'react-router-dom';
import Post from '../../store/types/post-interface';
import useUserRoleColorClass from '../../hooks/user/use-user-role-class';
import SafeHtml from '../SafeHtml';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

export default function CommentPreview({ comment }: { comment: Comment }) {
  const { content, score, format, createdAt: date } = comment;
  const author = comment.author as unknown as User;
  const post = comment.post as Post;
  const { avatar } = useUserAvatarURL({ user: author });
  const { roleColorClass } = useUserRoleColorClass({ user: author });

  const { hasUpvoted, hasDownvoted } = useCommentVote({ comment });

  return (
    <Link
      to={`/posts/${post._id}`}
      className="flex gap-2 p-2 hover:bg-gray-100 break-smart"
    >
      <div className="flex flex-col">
        <img
          className="rounded-full"
          height={48}
          width={48}
          src={avatar}
          alt="Avatar"
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col">
            <span className={`${roleColorClass} font-bold`}>
              {author.username}
            </span>
            <span className="text-gray-800">
              Hace {formatDistanceToNow(date, { locale: es })}
            </span>
          </div>
          <div className="m-0 text-lg leading-6 text-gray-800">
            {format ? <SafeHtml html={content} /> : content}
          </div>
          <div className="flex gap-5 items-center">
            <div className="flex items-center gap-2">
              <div className={`${hasUpvoted && 'text-blue-600'} flex`}>
                <ThumbsUp strokeWidth={1.5} className="size-5" />
              </div>
              <span className="text-lg font-semibold">{score}</span>
              <div className={`${hasDownvoted && 'text-red-600'} flex`}>
                <ThumbsDown strokeWidth={1.5} className="size-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
