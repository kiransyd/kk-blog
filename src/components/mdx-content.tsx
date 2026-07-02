import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 scroll-m-20 text-[1.625rem] font-medium leading-tight tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-heading)]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 scroll-m-20 text-[1.375rem] font-medium leading-snug tracking-tight text-[var(--text-primary)] font-[family-name:var(--font-heading)]"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="mt-5 text-[1.125rem] leading-[1.85] text-[var(--text-secondary)] font-[family-name:var(--font-body)]"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="mt-5 list-disc space-y-1.5 pl-6 text-[1.125rem] leading-[1.85] text-[var(--text-secondary)] font-[family-name:var(--font-body)]"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="mt-5 list-decimal space-y-1.5 pl-6 text-[1.125rem] leading-[1.85] text-[var(--text-secondary)] font-[family-name:var(--font-body)]"
      {...props}
    />
  ),
  li: (props) => <li className="leading-[1.85]" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 mb-8 border-l-[2px] border-[var(--accent)] bg-[var(--accent-subtle)] px-5 py-4 text-[1.0625rem] leading-[1.75] italic text-[var(--text-primary)] font-[family-name:var(--font-body)]"
      {...props}
    />
  ),
  a: ({ href = "#", ...props }) => (
    <a
      href={href}
      className="text-[var(--accent)] underline decoration-1 underline-offset-[3px] decoration-[var(--accent-underline)] transition-colors hover:decoration-[var(--accent)]"
      {...props}
    />
  ),
  code: (props) => (
    <code
      className="rounded-sm bg-[var(--accent-subtle)] px-1.5 py-0.5 text-[0.875em] text-[var(--accent)] font-[family-name:var(--font-mono)]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-sm border border-[var(--border)] bg-[var(--surface)] p-5 text-[0.875rem] leading-relaxed text-[var(--text-primary)] font-[family-name:var(--font-mono)]"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-[var(--border)]" />,
  strong: (props) => <strong className="font-semibold text-[var(--text-primary)]" {...props} />,
};
