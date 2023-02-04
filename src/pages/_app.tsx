import "@/styles/base.css";
import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { usePathname } from "next/navigation";

export default function MyApp({ Component, pageProps }: AppProps) {
  const pathname = usePathname();
  const ogImage = new URL("/api/og", process.env.NEXT_PUBLIC_HOST!);
  ogImage.searchParams.set("title", "suiramdev's blog");
  ogImage.searchParams.set(
    "description",
    "Here, I share my thoughts, reviews, projects, and glimpses of my life."
  );

  return (
    <>
      <DefaultSeo
        titleTemplate="suiramdev's blog | %s"
        defaultTitle="suiramdev's blog"
        description="Here, I share my thoughts, reviews, projects, and glimpses of my life."
        canonical={new URL(
          pathname || "/",
          process.env.NEXT_PUBLIC_HOST!
        ).toString()}
        openGraph={{
          title: "suiramdev's blog",
          description:
            "Here, I share my thoughts, reviews, projects, and glimpses of my life.",
          images: [
            {
              url: ogImage.toString(),
            },
          ],
          url: process.env.HOST,
          type: "website",
          locale: "us_EN",
        }}
        twitter={{
          handle: "@suiramdev",
          site: "@suiramdev",
          cardType: "summary_large_image",
        }}
      />
      <Component {...pageProps} />
    </>
  );
}
