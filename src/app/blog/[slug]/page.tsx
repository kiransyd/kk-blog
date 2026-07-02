import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    authors: [{ name: "Kiran Kumar" }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      url: `https://blog.kirankumar.co/blog/${slug}`,
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-[42rem] px-5 py-12 sm:px-8 sm:py-16">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-[0.875rem] text-[var(--text-muted)] font-[family-name:var(--font-body)] italic transition-colors hover:text-[var(--accent)]"
      >
        <svg width="12" height="12" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 3.5L4 8l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
      </Link>

      {/* Post header — clean, no box */}
      <header className="mt-10">
        <div className="flex items-center gap-3 text-[0.875rem] text-[var(--text-muted)] font-[family-name:var(--font-body)]">
          <time dateTime={post.frontmatter.date}>{formatDate(post.frontmatter.date)}</time>
          <span aria-hidden className="text-[var(--border)]">/</span>
          <span>{post.frontmatter.readingTime}</span>
        </div>

        <h1 className="mt-4 font-[family-name:var(--font-heading)] text-[2.25rem] font-medium leading-[1.1] tracking-tight text-[var(--text-primary)] sm:text-[2.75rem] lg:text-[3rem]">
          {post.frontmatter.title}
        </h1>

        {post.frontmatter.description && (
          <p className="mt-4 text-[1.125rem] leading-relaxed text-[var(--text-secondary)] font-[family-name:var(--font-body)] max-w-[36rem]">
            {post.frontmatter.description}
          </p>
        )}
      </header>

      {/* Separator */}
      <hr className="my-10 border-[var(--border)]" />

      {/* Content */}
      <div className="prose-content">
        {post.content}
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-[var(--border)] pt-10">
        <p className="font-[family-name:var(--font-body)] text-[0.9375rem] italic text-[var(--text-secondary)]">
          If this was useful, the archive has more.
        </p>
        <Link
          href="/blog"
          className="mt-2 inline-flex items-center gap-1.5 text-[0.9375rem] font-[family-name:var(--font-body)] italic text-[var(--accent)] underline decoration-1 underline-offset-[3px] decoration-[var(--accent-underline)] transition-colors hover:decoration-[var(--accent)]"
        >
          Browse all posts&nbsp;&rarr;
        </Link>
      </footer>
    </article>
  );
}
