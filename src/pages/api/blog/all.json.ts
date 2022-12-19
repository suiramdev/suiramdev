import S3Client from "../../../libs/s3client";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import type Post from "../../../types/post";

export async function get() {
    try {
        const list = await S3Client.send(new ListObjectsV2Command({
            Bucket: import.meta.env.S3_BUCKET,
            StartAfter: "content/",
        }));

        const data: Post[] = list.Contents ?
            await Promise.all(list.Contents.map(async (content) => {
                const slug = content.Key?.split("/")?.pop()?.split(".")[0];

                const post = await fetch(new URL(`/api/blog/${slug}.json`, import.meta.env.SITE));
                if (!post.ok) return;

                return await post.json();
            })) : [];

        return new Response(JSON.stringify(data, null, '\t'), {
            status: 200,
            headers: {
                "Content-Type": "application/json"
            }
        })
    } catch (error) {
        return new Response(null, {
            status: 500,
            statusText: "Something went wrong on our side..."
        })
    }
} 
