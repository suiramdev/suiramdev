import rss from "@astrojs/rss";

export async function get() {
    const posts = await (
        await fetch(new URL("/api/blog/all.json", import.meta.env.SITE))
    ).json();

    return rss({
        title: "suiramdev's blog",
        description: "Here, I share my thoughts, reviews, projects, and glimpses of my life.",
        site: import.meta.env.SITE,
        items: await Promise.all(posts.map(async (post) => {
            const postData = await (
                await fetch(new URL(`/api/blog/${post.slug}.json`, import.meta.env.SITE))
            ).json();

            return {
                link: `/blog/${post.slug}`,
                title: postData.data.title,
                pubDate: postData.data.pubDate,
            }
        })),
        stylesheet: "/rss/styles.xsl",
    });
}
