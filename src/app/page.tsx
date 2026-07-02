import Link from "next/link";
import { PostListItem } from "@/components/post-list-item";
import { getPostSummaries } from "@/lib/mdx";

export default async function HomePage() {
  const posts = await getPostSummaries();

  return (
    <div className="mx-auto max-w-[42rem] px-5 sm:px-8">
      {/* Intro */}
      <section className="py-20 sm:py-28">
        <h1 className="font-[family-name:var(--font-heading)] text-[2.75rem] font-medium leading-[1.08] tracking-tight text-[var(--text-primary)] sm:text-[3.25rem] lg:text-[3.75rem]">
          Kiran Kumar
        </h1>
        <p className="mt-6 max-w-[36rem] text-[1.1875rem] leading-relaxed text-[var(--text-secondary)]">
          Field notes on using AI agents to replace meetings, freelancers, and
          busywork. Whenever I watch a standout video or run a real experiment,
          I translate it into a playbook here&mdash;no fluff, just what my
          future self will need.
        </p>
        <div className="mt-6 flex gap-5 text-[0.9375rem] text-[var(--text-muted)]">
          <Link
            href="/blog"
            className="font-[family-name:var(--font-body)] italic underline decoration-1 underline-offset-[3px] decoration-[var(--accent-underline)] transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
          >
            Read the archive&nbsp;&rarr;
          </Link>
        </div>
      </section>

      {/* Posts */}
      {posts.length > 0 && (
        <section className="pb-24 sm:pb-32">
          <hr className="border-[var(--border)]" />
          <div className="mt-10 space-y-10">
            {posts.slice(0, 8).map((post, i) => (
              <div
                key={post.slug}
                className="post-list-item"
                style={{ animationDelay: `${0.05 * (i + 1)}s` }}
              >
                <PostListItem post={post} />
              </div>
            ))}
          </div>
          {posts.length > 8 && (
            <div className="mt-12 text-center">
              <Link
                href="/blog"
                className="font-[family-name:var(--font-body)] text-[0.9375rem] italic text-[var(--text-secondary)] underline decoration-1 underline-offset-[3px] decoration-[var(--accent-underline)] transition-colors hover:text-[var(--accent)] hover:decoration-[var(--accent)]"
              >
                All posts&nbsp;&rarr;
              </Link>
            </div>
          )}
        </section>
      )}

      {posts.length === 0 && (
        <section className="pb-24 sm:pb-32">
          <hr className="border-[var(--border)]" />
          <p className="mt-16 text-center text-[1.0625rem] text-[var(--text-muted)] font-[family-name:var(--font-body)]">
            First article coming soon.
          </p>
        </section>
      )}
    </div>
  );
}
