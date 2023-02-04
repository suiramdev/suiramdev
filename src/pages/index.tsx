import PostLink from "@/components/blog/PostLink";
import siteFetch from "@/utils/fetch";
import Post from "@/types/Post";
import { GetStaticPropsContext } from "next";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaRss, FaTwitter } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import generateRssFeed from "@/utils/rss";

type Props = {
  posts: Post[] | null;
};

export default function HomePage({ posts }: Props) {
  return (
    <>
      <section className="px-6 lg:px-56 xl:px-96 py-10">
        <div className="mb-16 flex flex-col gap-8 text-center">
          <h1>Hello, I&apos;m Marius! 👋</h1>
          <span className="text-center text-gray-400">
            Here, I share my thoughts, reviews, projects, and glimpses of my
            life.
          </span>
        </div>
        <div className="flex flex-col gap-3.5">
          <ul className="flex items-center gap-3.5">
            <li>
              <Link href="/rss.xml" className="btn btn-primary">
                <FaRss />
                Follow
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/suiramdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                title="Github"
              >
                <FaGithub size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com/suiramdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                title="Twitter"
              >
                <FaTwitter size={24} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/suiramdev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col gap-3.5">
            {posts &&
              posts
                .filter((post) => !post.frontmatter?.draft)
                .map((post) => (
                  <li key={post.slug}>
                    <PostLink post={post} key={post.slug} />
                  </li>
                ))}
          </ul>
        </div>
      </section>
      <section className="px-6 lg:px-56 xl:px-96 py-10 bg-grid-pattern">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1>Bringing your vision to life</h1>
          <span className="text-gray-400">
            I specialise in turning your ideas into reality through custom
            website and application development services.
          </span>
          <a href="mailto:contact@suiram.dev" className="btn btn-primary">
            <FiExternalLink />
            Contact me
          </a>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const posts: Post[] = await (await siteFetch("/api/blog/all")).json();
  await generateRssFeed(posts); // We also generate the RSS feed here, on build time

  return {
    props: {
      posts,
    },
  };
}
