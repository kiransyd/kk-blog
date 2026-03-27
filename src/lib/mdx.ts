import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { mdxComponents } from "@/components/mdx-content";

const POSTS_DIR = path.join(process.cwd(), "content/posts");
const DEFAULT_SOURCE_FILE = "index.mdx";

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

async function readPostFile(slug: string) {
  const filePath = path.join(POSTS_DIR, slug, DEFAULT_SOURCE_FILE);
  return fs.readFile(filePath, "utf8");
}

export async function getAllPostSlugs() {
  try {
    const entries = await fs.readdir(POSTS_DIR, { withFileTypes: true });
    return entries.filter((entry) => entry.isDirectory()).map((entry) => entry.name);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }
    throw error;
  }
}

export async function getPostSummaries() {
  const slugs = await getAllPostSlugs();
  const summaries = await Promise.all(
    slugs.map(async (slug) => {
      const file = await readPostFile(slug);
      const { data, content } = matter(file);
      const meta = data as PostFrontmatter;
      return {
        ...meta,
        slug,
        readingTime: readingTime(content).text,
      } satisfies PostSummary;
    }),
  );

  return summaries
    .filter((post) => post.published !== false)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export async function getPostBySlug(slug?: string): Promise<PostContent | null> {
  if (!slug) return null;

  try {
    const file = await readPostFile(slug);
    const stats = readingTime(file);
    const { content, frontmatter } = await compileMDX<PostFrontmatter>({
      source: file,
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

    const summary: PostSummary = {
      ...frontmatter,
      slug,
      readingTime: stats.text,
    };

    return {
      frontmatter: summary,
      content,
    };
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return null;
    }
    throw error;
  }
}
