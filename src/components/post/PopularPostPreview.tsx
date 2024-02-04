import useUserAvatarURL from '../../hooks/user/useUserAvatarURL';
import Post from '../../store/types/post-interface';
import User from '../../store/types/user-interface';

export default function PopularPostPreview({ post }: { post: Post }) {
  const author = post.author as User;
  const avatar = useUserAvatarURL({ user: author });

  return (
    <div className="p-2 flex items-center gap-2 outline outline-1 outline-gray-500 hover:cursor-pointer hover:bg-gray-50">
      <div className="flex flex-col items-center">
        <div className='hover:cursor-pointer hover:text-blue-600'>
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
        <span className="text-lg font-medium">{post.score}</span>
        <div className='hover:cursor-pointer hover:text-red-600'>
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
      <div className="flex flex-col items-center">
        <div className='flex items-center gap-1 self-start'>
          <img height={24} width={24} src={avatar} alt="Avatar" />
          <span className='font-bold'>{author.username}</span>
        </div>
        <span className="text-xl">No me renta {post.title}</span>
      </div>
    </div>
  );
}
