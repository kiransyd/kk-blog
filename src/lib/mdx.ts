import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import postsData from "@/generated/posts.json";
import { mdxComponents } from "@/components/mdx-content";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  heroColor?: string;
  canonicalUrl?: string;
  published?: boolean;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
  readingTime: string;
};

export type PostContent = {
  frontmatter: PostSummary;
  content: React.ReactNode;
};

type StoredPost = {
  slug: string;
  raw: string;
  summary: PostSummary;
};

const posts = postsData as StoredPost[];
const postMap = new Map(posts.map((post) => [post.slug, post]));

console.log(`[posts] cached ${posts.length} entries`);

export async function getAllPostSlugs() {
  return posts.map((post) => post.slug);
}

export async function getPostSummaries() {
  return posts.map((post) => post.summary).filter((post) => post.published !== false);
}

export async function getPostBySlug(slug?: string): Promise<PostContent | null> {
  if (!slug) return null;
  const record = postMap.get(slug);
  if (!record) {
    console.warn(`[posts] missing slug: ${slug}`);
    return null;
  }

  const { content, frontmatter } = await compileMDX<PostFrontmatter>({
    source: record.raw,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "wrap",
              properties: {
                className: ["group"],
              },
            },
          ],
        ],
      },
    },
  });

  return {
    frontmatter: { ...record.summary, ...frontmatter, slug },
    content,
  };
}
