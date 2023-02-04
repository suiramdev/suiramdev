import { NextApiRequest, NextApiResponse } from "next";
import { GetObjectCommand } from "@aws-sdk/client-s3";
import s3client from "@/utils/s3client";
import { serialize } from "next-mdx-remote/serialize";
import Post from "@/types/Post";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") return;
  try {
    const object = await s3client.send(
      new GetObjectCommand({
        Bucket: process.env.S3_BUCKET,
        Key: `content/${req.query.slug as string}.mdx`,
      })
    );

    if (!object || !object.Body)
      return res.status(404).json({ message: "Not found" });

    const post: Post = {
      slug: req.query.slug as string,
      ...(await serialize(await object.Body.transformToString(), {
        parseFrontmatter: true,
      })),
    };

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}
