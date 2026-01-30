import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Mail, Wand2, Instagram, Youtube, Video } from "lucide-react";

const features = [
  {
    title: "AI Video Generation",
    description:
      "Transform your text prompts into engaging short videos instantly using our advanced AI models. No video editing skills required.",
    icon: Wand2,
  },
  {
    title: "Smart Scheduler",
    description:
      "Plan your content calendar ahead of time. Auto-post to YouTube Shorts, Instagram Reels, and TikTok at optimal times.",
    icon: Calendar,
  },
  {
    title: "Multi-Platform Support",
    description:
      "One click to publish everywhere. Connect your accounts and manage your entire social media presence from a single dashboard.",
    icon: Video,
  },
  {
    title: "Email Integration",
    description:
      "Notify your subscribers instantly when new content drops. Automated email campaigns triggered by your publishing schedule.",
    icon: Mail,
  },
];

export function Features() {
  return (
    <section className="container mx-auto px-4 py-24 md:px-6 lg:py-32">
      <div className="mx-auto mb-16 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Everything you need to go viral
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Streamline your workflow with our all-in-one AI content creation
          suite.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Card
            key={feature.title}
            className="group relative overflow-hidden text-center transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <CardHeader>
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <feature.icon className="h-6 w-6" />
              </div>
              <CardTitle className="text-xl">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                {feature.description}
              </CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
