import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import { ReadingProgress } from "@/components/reading-progress";

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
      url: `https://kirans-blog.vercel.app/blog/${slug}`,
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

  const hero = post.frontmatter.heroColor ?? "var(--accent)";

  return (
    <>
      <ReadingProgress />
      <article className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-[42rem]">
          {/* Back link */}
          <Link
            href="/blog"
            className="animate-fade-in inline-flex items-center gap-1.5 font-[family-name:var(--font-sans)] text-[13px] font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.5 3.5L4 8l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to archive
          </Link>

          {/* Post header */}
          <header className="mt-8 animate-fade-in-up">
            <div
              className="relative overflow-hidden rounded-lg border border-[var(--border)] bg-gradient-to-br p-8 sm:p-10"
              style={{ backgroundImage: `linear-gradient(135deg, ${hero}, var(--hero-gradient-to))` }}
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 font-[family-name:var(--font-sans)] text-[13px] text-white/70">
                <span>{formatDate(post.frontmatter.date)}</span>
                <span className="h-1 w-1 rounded-full bg-white/30" aria-hidden />
                <span>{post.frontmatter.readingTime}</span>
              </div>

              {/* Title */}
              <h1 className="mt-5 font-[family-name:var(--font-sans)] text-[1.75rem] font-semibold leading-tight tracking-tight text-white sm:text-[2.25rem] lg:text-[2.5rem]">
                {post.frontmatter.title}
              </h1>

              {/* Description */}
              <p className="mt-3 font-[family-name:var(--font-serif)] text-[1.0625rem] leading-relaxed text-white/80 max-w-[38rem]">
                {post.frontmatter.description}
              </p>

              {/* Tags */}
              {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {post.frontmatter.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="font-[family-name:var(--font-sans)] rounded-md border border-white/20 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>

          {/* Content - editorial reading experience */}
          <div className="prose-content mt-12 animate-fade-in-up">
            {post.content}
          </div>

          {/* Footer CTA */}
          <footer className="mt-20 animate-fade-in rounded-lg border border-[var(--border)] bg-[var(--surface)] p-7 sm:p-9">
            <p className="font-[family-name:var(--font-sans)] text-[15px] font-semibold text-[var(--text-primary)]">
              Did this help?
            </p>
            <p className="mt-2 font-[family-name:var(--font-serif)] text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
              I turn standout videos and real experiments into playbooks. Send me
              a YouTube link and I&apos;ll line up the next article.
            </p>
            <Link
              href="/blog"
              className="mt-4 inline-flex items-center gap-1.5 font-[family-name:var(--font-sans)] text-[13px] font-medium text-[var(--accent)] transition-colors hover:text-[var(--accent-light)]"
            >
              <svg width="14" height="14" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.5 11.5L2 7l4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Back to the latest posts
            </Link>
          </footer>
        </div>
      </article>
    </>
  );
}
