import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { PostSummary } from "@/lib/mdx";

export function PostCard({ post }: { post: PostSummary }) {
  return (
    <article className="group rounded-3xl border border-zinc-200/80 bg-white/70 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/5">
      <div className="flex items-center text-sm text-zinc-500 dark:text-zinc-400">
        <span>{formatDate(post.date)}</span>
        <span className="mx-2 h-1 w-1 rounded-full bg-zinc-300" aria-hidden />
        <span>{post.readingTime}</span>
      </div>
      <h2 className="mt-4 text-2xl font-semibold leading-snug text-zinc-900 dark:text-white">
        <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2">
          <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            {post.title}
          </span>
          <span className="translate-y-px text-xl opacity-0 transition group-hover:opacity-100">→</span>
        </Link>
      </h2>
      <p className="mt-3 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
        {post.description}
      </p>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-zinc-200/70 px-3 py-1 text-xs uppercase tracking-wide text-zinc-600 dark:border-white/15 dark:text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
