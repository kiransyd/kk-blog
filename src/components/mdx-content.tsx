import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 scroll-m-20 text-[1.5rem] font-semibold leading-tight tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-sans)]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 scroll-m-20 text-[1.25rem] font-semibold leading-snug tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-sans)]"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mt-6 text-[1.125rem] leading-[1.8] text-[var(--text-secondary)] font-[family-name:var(--font-serif)]"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-6 list-disc space-y-2 pl-6 text-[1.125rem] leading-[1.8] text-[var(--text-secondary)] font-[family-name:var(--font-serif)]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-6 list-decimal space-y-2 pl-6 text-[1.125rem] leading-[1.8] text-[var(--text-secondary)] font-[family-name:var(--font-serif)]"
      {...props}
    />
  ),
  li: (props) => <li className="leading-[1.8]" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 mb-8 rounded-r-lg border-l-[3px] border-[var(--accent)] bg-[var(--accent-subtle)] px-6 py-5 text-[1.125rem] leading-[1.8] italic text-[var(--text-primary)] font-[family-name:var(--font-serif)]"
      {...props}
    />
  ),
  a: ({ href = "#", ...props }) => (
    <a
      href={href}
      className="text-[var(--accent)] underline decoration-1 underline-offset-[3px] decoration-[var(--accent-subtle)] transition-colors hover:decoration-[var(--accent)]"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-md bg-[var(--accent-subtle)] px-1.5 py-0.5 text-[0.875em] font-medium text-[var(--accent)] font-[family-name:var(--font-mono)]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-lg border border-[var(--border)] bg-[var(--surface-elevated)] p-5 text-[0.875rem] leading-relaxed text-[var(--text-primary)] font-[family-name:var(--font-mono)]"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-[var(--border)]" />,
  strong: (props) => <strong className="font-semibold text-[var(--text-primary)]" {...props} />,
};
