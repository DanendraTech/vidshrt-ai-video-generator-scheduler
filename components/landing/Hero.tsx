import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center overflow-hidden py-24 text-center md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6">
          <div className="inline-flex items-center rounded-full border bg-background/50 px-3 py-1 text-sm font-medium backdrop-blur-sm">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            <span className="bg-linear-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              AI-Powered Video Creation
            </span>
          </div>

          <h1 className="bg-linear-to-br from-foreground to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
            Create Viral
            <span className="block bg-linear-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Short Videos with AI
            </span>
          </h1>

          <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Automate your content creation for YouTube Shorts, Instagram Reels,
            and TikTok. Generate script, voice, and visuals in seconds. Schedule
            and post automatically.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <SignedOut>
              <SignInButton mode="modal">
                <Button size="lg" className="h-12 px-8 text-base">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/dashboard">
                <Button size="lg" className="h-12 px-8 text-base">
                  Go to Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </SignedIn>
            <Button
              variant="outline"
              size="lg"
              className="h-12 px-8 text-base bg-background/50 backdrop-blur-sm"
            >
              See How It Works
            </Button>
          </div>

          <div className="mt-12 w-full max-w-4xl rounded-xl border bg-background/50 p-2 shadow-2xl backdrop-blur-xl lg:mt-20">
            <div className="aspect-video w-full rounded-lg bg-linear-to-br from-gray-900 to-gray-800 ring-1 ring-white/10" />
            {/* Placeholder for dashboard screenshot */}
          </div>
        </div>
      </div>
    </section>
  );
}
