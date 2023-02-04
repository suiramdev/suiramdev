import Image from "next/image";
import Post from "@/types/Post";
import { MDXRemote } from "next-mdx-remote";
import Note from "./content/Note";
import Code from "./content/Code";

type Props = {
  post: Post;
};

export default function PostContent({ post }: Props) {
  return (
    <MDXRemote
      {...post}
      components={{
        p: (props: any) => (
          <p className="leading-relaxed" {...props}>
            {props.children}
          </p>
        ),
        h1: (props: any) => (
          <h1 className="my-4" {...props}>
            {props.children}
          </h1>
        ),
        h2: (props: any) => (
          <h2 className="my-4" {...props}>
            {props.children}
          </h2>
        ),
        h3: (props: any) => (
          <h3 className="my-4" {...props}>
            {props.children}
          </h3>
        ),
        h4: (props: any) => (
          <h4 className="my-4" {...props}>
            {props.children}
          </h4>
        ),
        h5: (props: any) => (
          <h5 className="my-4" {...props}>
            {props.children}
          </h5>
        ),
        h6: (props: any) => (
          <h6 className="my-4" {...props}>
            {props.children}
          </h6>
        ),
        img: (props: any) => <Image className="mx-auto my-4" {...props} />,
        ul: (props: any) => (
          <ul class="my-5 pl-8 flex flex-col gap-2 list-disc" {...props}>
            {props.children}
          </ul>
        ),
        blockquote: (props: any) => <Note {...props}>{props.children}</Note>,
        code: (props: any) => {
          console.log(props);
          return (
            <Code lang={props.className?.replace("language-", "")}>
              {props.children}
            </Code>
          );
        },
        Note,
      }}
    />
  );
}
