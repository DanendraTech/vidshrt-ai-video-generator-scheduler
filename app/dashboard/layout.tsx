import { Sidebar } from "@/components/dashboard/Sidebar";
import { Header } from "@/components/dashboard/Header";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full bg-background dark:bg-black">
      <div className="fixed inset-y-0 left-0 z-50 hidden w-64 md:block">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col md:pl-64">
        <Header />
        <main className="flex-1 p-6 md:p-8">{children}</main>
      </div>
    </div>
  );
}
