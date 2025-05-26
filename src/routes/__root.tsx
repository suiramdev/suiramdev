import { Header } from "@/components/layout/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="pointer-events-none fixed h-full w-full bg-[url('/noise.png')] bg-repeat opacity-[0.08%]" />
      <main className="w-full px-4 py-10 sm:px-10 md:px-20 md:py-20 lg:px-40">
        <Header />
        <Outlet />
        {process.env.NODE_ENV === "development" && <TanStackRouterDevtools />}
      </main>
    </>
  ),
});
