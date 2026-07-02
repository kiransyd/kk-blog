import Link from "next/link";
import { formatDate } from "@/lib/format";
import type { PostSummary } from "@/lib/mdx";

export function PostListItem({ post }: { post: PostSummary }) {
  return (
    <article>
      <Link href={`/blog/${post.slug}`} className="group block">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-3 text-[0.8125rem] text-[var(--text-muted)] font-[family-name:var(--font-body)]">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden className="text-[var(--border)]">/</span>
            <span>{post.readingTime}</span>
          </div>
          <h2 className="font-[family-name:var(--font-heading)] text-[1.375rem] font-medium leading-snug text-[var(--text-primary)] transition-colors duration-150 group-hover:text-[var(--accent)]">
            {post.title}
          </h2>
          {post.description && (
            <p className="mt-0.5 text-[0.9375rem] leading-relaxed text-[var(--text-secondary)] line-clamp-2 font-[family-name:var(--font-body)]">
              {post.description}
            </p>
          )}
        </div>
      </Link>
    </article>
  );
}
