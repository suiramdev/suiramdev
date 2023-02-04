import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

export default function OG(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  return new ImageResponse(
    (
      <div tw="w-full h-full px-24 flex flex-col justify-center items-center text-center bg-black">
        <span tw="text-9xl">{searchParams.get("emoji")}</span>
        <span tw="my-10 text-white text-5xl font-bold">
          {searchParams.get("title")}
        </span>
        <span tw="text-3xl text-zinc-500">
          {searchParams.get("description")}
        </span>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
