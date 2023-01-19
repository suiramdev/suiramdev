import S3Client from "../../../libs/s3client";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import type Post from "../../../types/post";

export async function get() {
    try {
        const list = await S3Client.send(new ListObjectsV2Command({
            Bucket: import.meta.env.S3_BUCKET,
            StartAfter: "content/",
        }));

        const data: Post[] = [];
        if (list.Contents)
            for (const content of list.Contents) {
                const slug = content.Key?.split("/")?.pop()?.split(".")[0];

                const post = await fetch(new URL(`/api/blog/${slug}.json`, import.meta.env.SITE));
                if (post.ok)
                    data.push(await post.json());
            }

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
