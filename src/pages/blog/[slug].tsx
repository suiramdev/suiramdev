import PostContent from "@/components/blog/PostContent";
import siteFetch from "@/utils/fetch";
import Post from "@/types/Post";
import { FaArrowLeft, FaArrowUp } from "react-icons/fa";
import { GetStaticPropsContext } from "next";
import { NextSeo } from "next-seo";

type Props = {
  post: Post;
};

export default function PostPage({ post }: Props) {
  const ogImage = new URL(post.slug || "/", process.env.NEXT_PUBLIC_HOST);
  ogImage.searchParams.set("emoji", post.frontmatter?.prefix || "📝");
  ogImage.searchParams.set(
    "title",
    post.frontmatter?.title || "suiramdev's blog"
  );
  ogImage.searchParams.set(
    "description",
    post.frontmatter?.description ||
      "Here, I share my thoughts, reviews, projects, and glimpses of my life."
  );

  return (
    <>
      <NextSeo
        title={post.frontmatter?.title}
        description={post.frontmatter?.description}
        openGraph={{
          title: post.frontmatter?.title,
          description: post.frontmatter?.description,
          images: [
            {
              url: ogImage.toString(),
            },
          ],
          article: {
            publishedTime: post.frontmatter?.pubDate,
          },
        }}
      />
      <header
        className="px-6 lg:px-56 xl:px-96 py-10 flex flex-col items-center gap-2 mb-8 text-center"
        id="top"
      >
        <span className="text-8xl">{post.frontmatter?.prefix}</span>
        <h1>{post.frontmatter?.title}</h1>
        <span className="text-zinc-500">{post.frontmatter?.pubDate}</span>
      </header>
      <main className="nest mb-8">
        <PostContent post={post} />
        <section className="flex justify-between items-center my-4">
          <a href="/" className="btn btn-action">
            <FaArrowLeft size={12} /> Back
          </a>
          <a href="#top" className="btn btn-action">
            <FaArrowUp size={12} /> Top
          </a>
        </section>
      </main>
    </>
  );
}

export async function getStaticPaths() {
  const posts: Post[] = await (await siteFetch("/api/blog/all")).json();

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post: Post = await (
    await siteFetch(`/api/blog/${params!.slug}`)
  ).json();

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
  };
}
