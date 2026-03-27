import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getPostSummaries } from "@/lib/mdx";

export default async function HomePage() {
  const posts = await getPostSummaries();

  return (
    <div className="bg-[#f5f5fa] px-4 py-16 dark:bg-[#05050b]">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12">
        <header className="rounded-4xl relative overflow-hidden bg-gradient-to-br from-purple-600 via-blue-600 to-emerald-500 p-10 text-white shadow-2xl">
          <div className="absolute inset-0 opacity-30" aria-hidden />
          <div className="relative z-10 flex flex-col gap-6">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70">AI Operator Journal</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
              Field notes on using AI agents to replace meetings, freelancers, and busywork.
            </h1>
            <p className="text-lg text-white/80 sm:text-xl">
              Whenever I watch a standout video or run a real experiment, I translate it into a playbook here—no fluff, just
              the signal my future self will actually use.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <Link
                href="#posts"
                className="rounded-full bg-white px-5 py-2 text-zinc-900 transition hover:bg-white/90"
              >
                Read the latest post
              </Link>
              <Link
                href="/blog"
                className="rounded-full border border-white/40 px-5 py-2 text-white transition hover:border-white"
              >
                Browse the archive
              </Link>
            </div>
          </div>
        </header>

        <section id="posts" className="space-y-6">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-[0.4em] text-zinc-500"> Fresh drops </p>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">Latest posts</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
            {posts.length === 0 && (
              <p className="col-span-full rounded-3xl border border-dashed border-zinc-300/80 p-8 text-zinc-500">
                First article coming soon.
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
