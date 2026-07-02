import Link from "next/link";
import { PostCard } from "@/components/post-card";
import { getPostSummaries } from "@/lib/mdx";

export default async function HomePage() {
  const posts = await getPostSummaries();

  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      {/* Hero */}
      <section className="animate-fade-in py-20 sm:py-28">
        <div className="max-w-[42rem]">
          <p className="font-[family-name:var(--font-sans)] text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
            Kiran Kumar
          </p>
          <h1 className="mt-5 font-[family-name:var(--font-sans)] text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-[3.25rem] lg:text-[3.75rem]">
            Field notes on using AI agents to replace meetings, freelancers, and
            busywork.
          </h1>
          <p className="mt-5 font-[family-name:var(--font-serif)] text-[1.1875rem] leading-relaxed text-[var(--text-secondary)] max-w-[38rem]">
            Whenever I watch a standout video or run a real experiment, I
            translate it into a playbook here &mdash; no fluff, just the signal
            my future self will actually use.
          </p>
        </div>
      </section>

      {/* Latest posts */}
      <section className="pb-20 sm:pb-28">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-[family-name:var(--font-sans)] text-[15px] font-semibold text-[var(--text-muted)] uppercase tracking-[0.08em]">
            Latest posts
          </h2>
          {posts.length > 2 && (
            <Link
              href="/blog"
              className="font-[family-name:var(--font-sans)] text-[13px] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              View all &rarr;
            </Link>
          )}
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
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
          <p className="rounded-lg border border-dashed border-[var(--border)] p-8 text-center text-[15px] text-[var(--text-muted)] font-[family-name:var(--font-serif)]">
            First article coming soon.
          </p>
        )}
      </section>
    </div>
  );
}
