import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

export function Header() {
  return (
    <div className="mb-20 flex w-full items-center justify-between">
      <Link to="/">
        <span className="text-2xl font-bold">suiram.dev</span>
      </Link>
      <div className="flex items-center gap-2">
        <a href="/resume-en.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="sm">
            <DownloadIcon className="size-4" />
            <span>my resume</span>
          </Button>
        </a>
        <ThemeToggle />
      </div>
    </div>
  );
}
