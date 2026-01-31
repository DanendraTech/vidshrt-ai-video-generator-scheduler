import { currentUser } from "@clerk/nextjs/server";
import { syncUser } from "@/lib/actions/user";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  // Sync user to Supabase
  await syncUser();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-muted-foreground">
        Welcome back, {user.firstName}!
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Dashboard content will go here */}
        <div className="rounded-xl border bg-card p-6 shadow-xs">
          <h3 className="font-semibold">Recent Videos</h3>
          <div className="mt-4 h-32 rounded-lg bg-muted/50 flex items-center justify-center text-sm text-muted-foreground">
            No videos generated yet
          </div>
        </div>

        <div className="rounded-xl border bg-card p-6 shadow-xs">
          <h3 className="font-semibold">Scheduled Posts</h3>
          <div className="mt-4 h-32 rounded-lg bg-muted/50 flex items-center justify-center text-sm text-muted-foreground">
            No posts scheduled
          </div>
        </div>
      </div>
    </div>
  );
}
