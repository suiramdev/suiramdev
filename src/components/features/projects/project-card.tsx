import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

interface Media {
  type: "video" | "image";
  src: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  link?: string;
  medias?: Media[];
}

export function ProjectCard({
  title,
  description,
  link,
  medias = [],
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="grid w-full space-y-12 sm:grid-cols-2"
    >
      <div>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h3 className="flex w-fit items-center gap-2 text-2xl font-bold">
            {title}
            {link && <ExternalLinkIcon className="h-4 w-4" />}
          </h3>
        </a>
      </div>
      <div className="flex flex-col gap-8">
        <ReactMarkdown
          className="text-muted-foreground text-sm"
          components={{
            a: ({ children, href }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
              >
                {children}
              </a>
            ),
          }}
        >
          {description}
        </ReactMarkdown>
        <div
          className={cn("grid grid-cols-1", {
            "grid-cols-2": medias.length === 2,
            "grid-cols-3": medias.length === 3,
            "grid-cols-4": medias.length === 4,
          })}
        >
          {medias.map((media) => (
            <div key={media.src}>
              {media.type === "video" ? (
                <video
                  src={media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onClick={(e) => {
                    const video = e.target as HTMLVideoElement;
                    if (video.requestFullscreen) {
                      video.requestFullscreen();
                    }
                  }}
                  className="w-full cursor-pointer"
                />
              ) : (
                <img src={media.src} alt={media.src} />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
