"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Video,
  BookOpen,
  CreditCard,
  Settings,
  Plus,
  Sparkles,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Series", href: "/dashboard" },
  { icon: Video, label: "Videos", href: "/dashboard/videos" },
  { icon: BookOpen, label: "Guides", href: "/dashboard/guides" },
  { icon: CreditCard, label: "Billing", href: "/dashboard/billing" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-screen w-64 flex-col border-r bg-card text-card-foreground dark">
      {/* Header */}
      <div className="flex h-16 items-center px-6 border-b border-border/10">
        <Link href="/dashboard" className="flex items-center gap-2">
          {/* Fallback to Sparkles if logo.svg is missing or for initial dev */}
          <div className="relative h-8 w-8">
            <Image
              src="/logo.svg"
              alt="VidShrt Logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-tr from-primary to-primary/70 bg-clip-text text-transparent">
            VidShrt
          </span>
        </Link>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        {/* Create Series Button */}
        <Button className="w-full justify-start gap-2" size="lg">
          <Plus className="h-5 w-5" />
          Create New Series
        </Button>

        {/* Navigation */}
        <nav className="flex flex-1 flex-col gap-2 mt-4">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant={isActive ? "secondary" : "ghost"}
                  className={cn(
                    "w-full justify-start gap-3 text-base px-4 py-3 h-auto", // Made bigger
                    isActive && "bg-secondary/50 font-medium",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </Button>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="border-t border-border/10 p-4 flex flex-col gap-2">
        <Link href="/dashboard/upgrade">
          <Button
            variant="outline"
            className="w-full justify-start gap-3 border-primary/20 hover:border-primary/50 hover:bg-primary/5"
          >
            <Sparkles className="h-4 w-4 text-primary" />
            Upgrade Plan
          </Button>
        </Link>
        <Link href="/dashboard/profile">
          <Button variant="ghost" className="w-full justify-start gap-3">
            <User className="h-5 w-5" />
            Profile Settings
          </Button>
        </Link>
      </div>
    </div>
  );
}
