import Post from "../../store/types/post-interface";

export default function PostContent({ post }: { post: Post }) {
  return (
    <>
      <div>{post.title}</div>
    </>
  );
}
