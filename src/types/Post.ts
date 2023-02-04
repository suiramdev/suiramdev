import { MDXRemoteSerializeResult } from "next-mdx-remote";

type Post = {
  slug: string;
} & MDXRemoteSerializeResult;

export default Post;
