import S3Client from "../../../libs/s3client";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import matter from "gray-matter";
import type Post from "../../../types/post";

export async function get({ params }: any) {
    try {
        const object = await S3Client.send(new GetObjectCommand({
            Bucket: import.meta.env.S3_BUCKET,
            Key: `content/${params.slug}.mdx`
        }));

        if (!object)
            return new Response(null, {
                status: 404,
                statusText: "Not found"
            });

        const post = matter(await object.Body!.transformToString());

        if (post.data.length <= 0 || post.data.draft)
            return;

        const data: Post = {
            slug: params.slug,
            content: post.content,
            data: post.data
        };

        return new Response(JSON.stringify(data, null, '\t'), {
            status: 200,
            headers: {
                "Content-Type": "applications/json"
            }
        });
    } catch (error) {
        return new Response(null, {
            status: 500,
            statusText: "Something went wrong on our side..."
        });
    }
}
