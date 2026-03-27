import type { MDXComponents } from "mdx/types";
import React from "react";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 scroll-m-20 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-white"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 scroll-m-20 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-white"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-6 text-lg leading-8 text-zinc-700 dark:text-zinc-200" {...props} />
  ),
  ul: (props) => (
    <ul className="mt-6 list-disc space-y-2 pl-6 text-lg text-zinc-700 dark:text-zinc-200" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-6 list-decimal space-y-2 pl-6 text-lg text-zinc-700 dark:text-zinc-200" {...props} />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 border-l-4 border-purple-400/70 pl-6 text-lg font-medium text-zinc-800 dark:text-zinc-100"
      {...props}
    />
  ),
  a: ({ href = "#", ...props }) => (
    <a
      href={href}
      className="text-purple-600 underline decoration-2 decoration-purple-200 underline-offset-4 hover:decoration-purple-400"
      {...props}
    />
  ),
  code: (props) => (
    <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-sm text-zinc-900 dark:bg-white/10 dark:text-zinc-100" {...props} />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-2xl bg-zinc-950 p-4 text-sm text-zinc-50"
      {...props}
    />
  ),
};
