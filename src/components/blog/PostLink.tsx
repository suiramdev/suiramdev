import Post from "@/types/Post";

type Props = {
  post: Post;
};

export default function PostLink({ post }: Props) {
  return (
    <a
      href={`/blog/${post.slug}`}
      className="flex flex-col gap-2 p-2.5 border border-gray-700 rounded-lg hover:bg-gray-900 transition-colors"
    >
      <span className="font-semibold">
        {post.frontmatter?.prefix} {post.frontmatter?.title}
      </span>
      <span className="text-gray-400 text-sm">{post.frontmatter?.pubDate}</span>
    </a>
  );
}
