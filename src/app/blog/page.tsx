import { PostCard } from "@/components/post-card";
import { getPostSummaries } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Deep dives on AI workflows, automation experiments, and founder ops.",
};

export default async function BlogPage() {
  const posts = await getPostSummaries();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <header className="mb-10 max-w-2xl animate-fade-in">
        <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
          Archive
        </p>
        <h1 className="mt-3 text-[2rem] font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-[2.5rem]">
          All posts
        </h1>
        <p className="mt-3 text-[16px] leading-relaxed text-[var(--text-secondary)]">
          Every long-form breakdown I&apos;ve shipped so far. Use them as playbooks, not theory.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {posts.map((post, i) => (
          <div
            key={post.slug}
            className="animate-fade-in-up"
            style={{ animationDelay: `${0.04 * (i + 1)}s` }}
          >
            <PostCard post={post} />
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="rounded-xl border border-dashed border-[var(--border)] p-8 text-center text-[15px] text-[var(--text-muted)]">
          Nothing here yet. Check back soon.
        </p>
      )}
    </div>
  );
}
