export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-5 py-10 sm:flex-row sm:px-8">
        <p className="font-[family-name:var(--font-sans)] text-[13px] text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Kiran Kumar
        </p>
        <div className="flex items-center gap-5">
          <a
            href="/blog"
            className="font-[family-name:var(--font-sans)] text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            Archive
          </a>
          <a
            href="https://github.com/kiransyd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-sans)] text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
