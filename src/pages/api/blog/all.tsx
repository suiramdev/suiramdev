import { NextApiRequest, NextApiResponse } from "next";
import { ListObjectsV2Command } from "@aws-sdk/client-s3";
import s3client from "@/utils/s3client";
import Post from "@/types/Post";
import siteFetch from "@/utils/fetch";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") return;
  try {
    const list = await s3client.send(
      new ListObjectsV2Command({
        Bucket: process.env.S3_BUCKET,
        StartAfter: "content/",
      })
    );

    const data: Post[] = [];
    if (list.Contents)
      for (const content of list.Contents) {
        const slug = content.Key?.split("/")?.pop()?.split(".")[0];

        const post = await siteFetch(`/api/blog/${slug}`);
        if (post.status == 200) data.push(await post.json());
      }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
}
