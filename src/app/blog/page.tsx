import { PostCard } from "@/components/post-card";
import { getPostSummaries } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Deep dives on AI workflows, automation experiments, and founder ops.",
};

export default async function BlogPage() {
  const posts = await getPostSummaries();

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-20">
      <header className="mb-12 max-w-[38rem] animate-fade-in">
        <p className="font-[family-name:var(--font-sans)] text-[13px] font-medium uppercase tracking-[0.12em] text-[var(--accent)]">
          Archive
        </p>
        <h1 className="mt-4 font-[family-name:var(--font-sans)] text-[2.25rem] font-semibold leading-tight tracking-tight text-[var(--text-primary)] sm:text-[2.75rem]">
          All posts
        </h1>
        <p className="mt-3 font-[family-name:var(--font-serif)] text-[1.125rem] leading-relaxed text-[var(--text-secondary)]">
          Every long-form breakdown I&apos;ve shipped so far. Use them as playbooks, not theory.
        </p>
      </header>

      <div className="grid gap-5 sm:grid-cols-2">
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
        <p className="rounded-lg border border-dashed border-[var(--border)] p-8 text-center text-[15px] text-[var(--text-muted)] font-[family-name:var(--font-serif)]">
          Nothing here yet. Check back soon.
        </p>
      )}
    </div>
  );
}
