import { PostCard } from "@/components/post-card";
import { getPostSummaries } from "@/lib/mdx";

export const metadata = {
  title: "Blog | Kiran Kumar",
  description: "Deep dives on AI workflows, automation experiments, and founder ops."
};

export default async function BlogPage() {
  const posts = await getPostSummaries();

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-16">
      <div className="mb-10 space-y-3">
        <p className="text-sm uppercase tracking-[0.4em] text-zinc-500">Archive</p>
        <h1 className="text-4xl font-semibold text-zinc-900 dark:text-white">All posts</h1>
        <p className="text-lg text-zinc-600 dark:text-zinc-300">
          Every long-form breakdown I’ve shipped so far. Use them as playbooks, not theory.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
