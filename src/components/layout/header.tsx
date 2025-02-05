import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Link } from "@tanstack/react-router";
export function Header() {
  return (
    <div className="mb-20 flex w-full items-center justify-between">
      <Link to="/">
        <span className="text-2xl font-bold">suiram.dev</span>
      </Link>
      <ThemeToggle />
    </div>
  );
}
