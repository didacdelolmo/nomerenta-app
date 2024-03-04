import { Link } from 'react-router-dom';
import useUserAvatarURL from '../../hooks/user/use-user-avatar-url';
import Post from '../../store/types/post-interface';
import User from '../../store/types/user-interface';
import usePostVote from '../../hooks/post/use-post-vote';
import useUserRoleColorClass from '../../hooks/user/use-user-role-class';
import { ThumbsDown, ThumbsUp } from 'lucide-react';

export default function PopularPostPreview({ post }: { post: Post }) {
  const author = post.author as User;
  const { avatar } = useUserAvatarURL({ user: author });

  const { roleColorClass } = useUserRoleColorClass({ user: author });
  const { hasUpvoted, hasDownvoted } = usePostVote({ post });

  return (
    <Link
      to={`/posts/${post._id}`}
      className="p-2 flex items-center gap-3 border border-gray-600 hover:cursor-pointer hover:bg-gray-100 rounded-md break-smart"
    >
      <div className="flex flex-col items-center gap-1">
        <div className={`${hasUpvoted && 'text-blue-600'} flex`}>
          <ThumbsUp strokeWidth={1.5} className="size-5" />
        </div>
        <span className="text-xl font-semibold">{post.score}</span>
        <div className={`${hasDownvoted && 'text-red-600'} flex`}>
          <ThumbsDown strokeWidth={1.5} className="size-5" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center gap-2 self-start">
          <img
            className="rounded-full"
            height={32}
            width={32}
            src={avatar}
            alt="Avatar"
          />
          <span className={`${roleColorClass} font-bold text-lg`}>
            {author.username}
          </span>
        </div>
        <span className="text-xl leading-tight font-medium">
          No me renta {post.title}
        </span>
      </div>
    </Link>
  );
}
