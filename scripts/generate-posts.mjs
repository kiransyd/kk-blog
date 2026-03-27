import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "content/posts");
const OUTPUT_DIR = path.join(process.cwd(), "src/generated");
const OUTPUT_FILE = path.join(OUTPUT_DIR, "posts.json");

async function main() {
  let entries = [];
  try {
    entries = await fs.readdir(CONTENT_DIR, { withFileTypes: true });
  } catch (error) {
    console.error(`[posts] unable to read content directory: ${CONTENT_DIR}`);
    throw error;
  }

  const posts = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const slug = entry.name;
    const filePath = path.join(CONTENT_DIR, slug, "index.mdx");
    const raw = await fs.readFile(filePath, "utf8");
    const { data, content } = matter(raw);
    const summary = {
      ...data,
      slug,
      readingTime: readingTime(content).text,
    };
    posts.push({ slug, raw, summary });
  }

  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  await fs.writeFile(OUTPUT_FILE, JSON.stringify(posts, null, 2));
  console.log(`[posts] wrote ${posts.length} entries to ${OUTPUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
