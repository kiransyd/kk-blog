import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { PostSummary } from "@/lib/mdx";

export function PostCard({ post }: { post: PostSummary }) {
  const accent = post.heroColor || "var(--accent)";

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 transition-all duration-200 hover:border-[var(--text-muted)] sm:p-6">
        {/* Accent bar */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] opacity-60 transition-opacity group-hover:opacity-100"
          style={{ background: accent }}
        />

        {/* Meta */}
        <div className="flex items-center gap-3 text-[13px] text-[var(--text-muted)]">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden />
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h2 className="mt-3 text-[17px] font-semibold leading-snug tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)]">
          {post.title}
        </h2>

        {/* Description */}
        <p className="mt-2 text-[14px] leading-relaxed text-[var(--text-secondary)] line-clamp-2">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-[var(--border-subtle)] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
