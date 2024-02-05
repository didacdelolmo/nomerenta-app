import { Link } from 'react-router-dom';
import useUserAvatarURL from '../../hooks/user/useUserAvatarURL';
import Post from '../../store/types/post-interface';
import User from '../../store/types/user-interface';
import { format } from 'date-fns';

export default function RecentPostPreview({ post }: { post: Post }) {
  const { _id, title, content, createdAt: date, commentCount } = post;
  const author = post.author as User;
  const avatar = useUserAvatarURL({ user: author });

  return (
    <Link to={`/posts/${_id}`} className="flex justify-between gap-5 outline outline-1 outline-gray-500 p-2 hover:bg-gray-50 hover:cursor-pointer">
      <div className="flex flex-col flex-grow min-w-0 justify-between">
        <h2 className="m-0">No me renta {title}</h2>
        <p className="m-0 break-words">
          {content.length > 20 ? `${content.substring(0, 64)}...` : content}
        </p>
      </div>
      <div className="flex flex-col flex-shrink-0 items-end justify-between gap-2">
        <div className="flex flex-col items-end">
          <div className="flex gap-1">
            <span className="font-bold">{author.username}</span>
            <img height={24} width={24} src={avatar} alt="Avatar" />
          </div>
          <span>{format(date, 'dd/MM/yyyy')}</span>
        </div>
        <div className="flex items-end gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
            />
          </svg>
          <span className="leading-none">{commentCount}</span>
        </div>
      </div>
    </Link>
  );
}
