import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { formatDate } from "@/lib/format";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: `${post.frontmatter.title} | Kiran Kumar`,
    description: post.frontmatter.description,
    authors: [{ name: "Kiran Kumar" }],
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: "article",
      url: `https://kirans-blog.vercel.app/blog/${params.slug}`,
      tags: post.frontmatter.tags,
    },
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const hero = post.frontmatter.heroColor ?? "#0b1321";

  return (
    <article className="bg-white px-4 py-16 dark:bg-black">
      <div className="mx-auto w-full max-w-3xl">
        <header
          className="relative overflow-hidden rounded-4xl border border-white/10 bg-gradient-to-br p-8 text-white shadow-2xl"
          style={{ backgroundImage: `linear-gradient(120deg, ${hero}, #18181d)` }}
        >
          <p className="text-sm uppercase tracking-[0.4em] text-white/70">Dispatch</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            {post.frontmatter.title}
          </h1>
          <p className="mt-4 text-lg text-white/80">{post.frontmatter.description}</p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-white/70">
            <span>{formatDate(post.frontmatter.date)}</span>
            <span>•</span>
            <span>{post.frontmatter.readingTime}</span>
          </div>
        </header>

        <div className="mt-12 space-y-6 text-lg leading-8 text-zinc-700 dark:text-zinc-200">
          {post.content}
        </div>

        <footer className="mt-16 rounded-3xl border border-zinc-200/70 bg-zinc-50 p-6 text-sm text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
          <p className="font-semibold text-zinc-900 dark:text-white">Did this help?</p>
          <p className="mt-2">
            I turn standout videos and real experiments into playbooks. Send me a YouTube link on WhatsApp and I’ll line up
            the next article.
          </p>
          <Link href="/" className="mt-4 inline-flex items-center text-purple-600">
            ← Back to the latest posts
          </Link>
        </footer>
      </div>
    </article>
  );
}
