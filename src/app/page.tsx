import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getPostSummaries } from "@/lib/mdx";

export default async function HomePage() {
  const posts = await getPostSummaries();

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Hero */}
      <section className="animate-fade-in py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
            AI Operator Journal
          </p>
          <h1 className="mt-4 text-[2.25rem] font-semibold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-[3rem] lg:text-[3.5rem]">
            Field notes on using AI agents to replace meetings, freelancers, and
            busywork.
          </h1>
          <p className="mt-4 text-[17px] leading-relaxed text-[var(--text-secondary)] max-w-[65ch]">
            Whenever I watch a standout video or run a real experiment, I
            translate it into a playbook here &mdash; no fluff, just the signal
            my future self will actually use.
          </p>
        </div>
      </section>

      {/* Latest posts */}
      <section className="pb-16 sm:pb-24">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-[15px] font-semibold text-[var(--text-primary)]">
            Latest posts
          </h2>
          {posts.length > 2 && (
            <Link
              href="/blog"
              className="text-[13px] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              View all &rarr;
            </Link>
          )}
        </div>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
          {posts.slice(0, 6).map((post, i) => (
            <div
              key={post.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.05 * (i + 1)}s` }}
            >
              <PostCard post={post} />
            </div>
          ))}
        </div>
        {posts.length === 0 && (
          <p className="rounded-xl border border-dashed border-[var(--border)] p-8 text-center text-[15px] text-[var(--text-muted)]">
            First article coming soon.
          </p>
        )}
      </section>
    </div>
  );
}
