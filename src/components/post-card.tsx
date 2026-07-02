import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { PostSummary } from "@/lib/mdx";

export function PostCard({ post }: { post: PostSummary }) {
  const accent = post.heroColor || "var(--accent)";

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <article className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-200 hover:border-[var(--text-muted)] sm:p-7">
        {/* Accent bar */}
        <div
          className="absolute inset-x-0 top-0 h-[2px]"
          style={{ background: accent }}
        />

        {/* Meta */}
        <div className="flex items-center gap-3 font-[family-name:var(--font-sans)] text-[13px] text-[var(--text-muted)]">
          <time dateTime={post.date}>{formatDate(post.date)}</time>
          <span className="h-1 w-1 rounded-full bg-[var(--text-muted)]" aria-hidden />
          <span>{post.readingTime}</span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-[1.25rem] font-semibold leading-snug tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent)] font-[family-name:var(--font-sans)]">
          {post.title}
        </h2>

        {/* Description */}
        <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)] line-clamp-2 font-[family-name:var(--font-serif)]">
          {post.description}
        </p>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="font-[family-name:var(--font-sans)] rounded-md border border-[var(--border-subtle)] px-2 py-0.5 text-[11px] font-medium uppercase tracking-wider text-[var(--text-muted)]"
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
