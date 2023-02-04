import Post from "@/types/Post";
import RSS from "rss";
import fs from "fs";
import path from "path";

export default async function generateRssFeed(posts: Post[]) {
    const feedOptions: RSS.FeedOptions = {
        title: "suiramdev's blog",
        description: "Here, I share my thoughts, reviews, projects, and glimpses of my life.",
        feed_url: `${process.env.HOST!}/rss.xml`,
        site_url: process.env.HOST!,
        managingEditor: "suiramdev",
        webMaster: "suiramdev",
        language: "en",
        pubDate: new Date(),
        copyright: `© ${new Date().getFullYear()} suiramdev`,
    };

    const feed = new RSS(feedOptions);

    posts.forEach((post) => feed.item({
        title: `${post.frontmatter?.prefix} ${post.frontmatter?.title}` || "New blog",
        description: post.frontmatter?.description || "",
        url: `${process.env.HOST!}/blog/${post.slug}`,
        date: post.frontmatter?.pubDate || new Date(),
    }));

    const fullFilePath = path.join(process.cwd(), 'public', 'rss.xml');
    if (fs.existsSync(fullFilePath))
        await fs.promises.unlink(fullFilePath);
    fs.writeFileSync(fullFilePath, feed.xml({ indent: true }));
}