import satori from "satori";
import { html } from "satori-html";
import { initWasm, Resvg } from "@resvg/resvg-wasm";
import { loadEmoji, getIconCode } from "../../libs/twemoji";

await initWasm(fetch('https://unpkg.com/@resvg/resvg-wasm/index_bg.wasm'));

export async function get({ request }: any) {
    const params = new URL(request.url).searchParams;

    try {

        const svg = await satori(
            html(`
            <div tw="w-full h-full flex bg-black">
                <div style="font-family: 'Inter'; background-image: linear-gradient(to bottom, rgba(0, 0, 0 , 0.8), transparent, transparent, transparent), url(${new URL("grid.svg", import.meta.env.SITE)});" tw="w-full h-full px-24 flex flex-col justify-center items-center text-center">
                   <span class="text-9xl">${params.get("icon") || ""}</span>
                   <span class="my-10 text-white text-5xl font-bold">${params.get("title") || ""}</span>
                   <span class="text-3xl text-zinc-500">${params.get("description") || ""}</span>
                </div>
            </div>
        `),
            {
                width: 1200,
                height: 600,
                fonts: [
                    {
                        name: 'Inter',
                        data: await (await fetch(
                            new URL(`/og/Inter-Regular.ttf`, import.meta.env.SITE)
                        )).arrayBuffer(),
                        weight: 400,
                    },
                    {
                        name: 'Inter',
                        data: await (await fetch(
                            new URL(`/og/Inter-Medium.ttf`, import.meta.env.SITE)
                        )).arrayBuffer(),
                        weight: 500,
                    },
                    {
                        name: 'Inter',
                        data: await (await fetch(
                            new URL(`/og/Inter-Bold.ttf`, import.meta.env.SITE)
                        )).arrayBuffer(),
                        weight: 700,
                    },
                ],
                loadAdditionalAsset: async (code: string, segment: string) => {
                    if (code === "emoji") {
                        return "data:image/svg+xml;base64," +
                            btoa(await loadEmoji("noto", getIconCode(segment)))
                    }
                },
            },
        );

        const resvgJS = new Resvg(svg, {
            fitTo: {
                mode: 'width',
                value: 1200,
            },
        });
        const image = resvgJS.render();

        return new Response(image.asPng(), {
            headers: {
                "Content-Type": "image/png;charset=utf-8",
                "Cache-Control": "public, max-age=31536000, immutable",
            },
        });
    } catch (e: any) {
        console.error(e.message);
        return new Response(null, {
            status: 500,
            statusText: "Something went wrong..."
        });
    }
}
