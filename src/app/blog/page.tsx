import { PostListItem } from "@/components/post-list-item";
import { getPostSummaries } from "@/lib/mdx";

export const metadata = {
  title: "Blog",
  description: "Deep dives on AI workflows, automation experiments, and founder ops.",
};

export default async function BlogPage() {
  const posts = await getPostSummaries();

  return (
    <div className="mx-auto max-w-[42rem] px-5 py-16 sm:px-8 sm:py-20">
      <header className="mb-16">
        <h1 className="font-[family-name:var(--font-heading)] text-[2.5rem] font-medium leading-tight tracking-tight text-[var(--text-primary)] sm:text-[3rem]">
          All posts
        </h1>
        <p className="mt-3 text-[1.125rem] leading-relaxed text-[var(--text-secondary)] font-[family-name:var(--font-body)]">
          Every long-form breakdown I&apos;ve shipped so far. Use them as playbooks, not theory.
        </p>
      </header>

      {posts.length > 0 ? (
        <div className="space-y-10">
          {posts.map((post, i) => (
            <div
              key={post.slug}
              className="post-list-item"
              style={{ animationDelay: `${0.04 * (i + 1)}s` }}
            >
              <PostListItem post={post} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-[1.0625rem] text-[var(--text-muted)] font-[family-name:var(--font-body)]">
          Nothing here yet. Check back soon.
        </p>
      )}
    </div>
  );
}
