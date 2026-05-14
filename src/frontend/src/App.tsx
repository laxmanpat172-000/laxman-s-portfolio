import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import { useTheme } from "@/hooks/useTheme";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("@/pages/HomePage"));

function PageLoader() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Skeleton className="h-[60vh] w-full rounded-2xl" />
      <Skeleton className="h-64 w-full rounded-2xl" />
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Layout theme={theme} onToggleTheme={toggleTheme}>
      <Suspense fallback={<PageLoader />}>
        <HomePage theme={theme} />
      </Suspense>
    </Layout>
  );
}
