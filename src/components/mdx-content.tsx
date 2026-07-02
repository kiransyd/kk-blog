import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h2: (props) => (
    <h2
      className="mt-12 scroll-m-20 text-2xl font-semibold tracking-tight text-[var(--text-primary)]"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 scroll-m-20 text-xl font-semibold tracking-tight text-[var(--text-primary)]"
      {...props}
    />
  ),
  p: (props) => (
    <p className="mt-6 text-[17px] leading-7 text-[var(--text-secondary)] max-w-[68ch]" {...props} />
  ),
  ul: (props) => (
    <ul className="mt-6 list-disc space-y-2 pl-6 text-[17px] leading-7 text-[var(--text-secondary)]" {...props} />
  ),
  ol: (props) => (
    <ol className="mt-6 list-decimal space-y-2 pl-6 text-[17px] leading-7 text-[var(--text-secondary)]" {...props} />
  ),
  li: (props) => <li className="leading-7" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="mt-8 rounded-r-xl border-l-[3px] border-[var(--accent)] bg-[var(--accent-subtle)] px-5 py-4 text-[17px] leading-7 text-[var(--text-primary)]"
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
      className="rounded-md bg-[var(--accent-subtle)] px-1.5 py-0.5 text-[0.875em] font-medium text-[var(--accent)]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mt-6 overflow-x-auto rounded-xl border border-[var(--border)] bg-[var(--surface-elevated)] p-4 text-[14px] leading-relaxed text-[var(--text-primary)]"
      {...props}
    />
  ),
  hr: () => <hr className="my-12 border-[var(--border)]" />,
  strong: (props) => <strong className="font-semibold text-[var(--text-primary)]" {...props} />,
};
