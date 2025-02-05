import { createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProjectList } from "@/components/features/projects/project-list";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <div className="mb-20 w-full max-w-2xl">
        <img
          src="/suiramdev.webp"
          alt="profile picture"
          className="bg-muted mb-8 h-24 w-24 border"
        />
        <h1 className="mb-8 text-5xl font-black tracking-tighter">
          hi. this is marius.
          <br />a full stack developer.
        </h1>
        <p className="text-muted-foreground mb-6 font-medium">
          i love creating beautiful and functional web applications.
          <br />
          i&apos;m a quick learner and i&apos;m always looking to improve my
          skills.
        </p>
        <div className="flex gap-4">
          <a href="tel:+3369663375">
            <Button className="w-fit" size="lg">
              <span>book a call</span>
            </Button>
          </a>
          <div className="focus-visible:ring-ring bg-success text-success-foreground inline-flex h-10 items-center justify-center gap-2 px-8 text-sm font-medium whitespace-nowrap transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0">
            <div className="flex h-screen items-center justify-center">
              <div className="relative inline-flex">
                <div className="bg-success-foreground h-2 w-2 rounded-full"></div>
                <div className="bg-success-foreground absolute top-0 left-0 h-2 w-2 animate-ping rounded-full"></div>
                <div className="bg-success-foreground absolute top-0 left-0 h-2 w-2 animate-pulse rounded-full"></div>
              </div>
            </div>
            <span>available for work</span>
          </div>
        </div>
      </div>
      <ProjectList />
    </main>
  );
}
