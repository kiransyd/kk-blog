export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-[42rem] flex-col items-center justify-between gap-2 px-5 py-8 sm:flex-row sm:px-8">
        <p className="font-[family-name:var(--font-body)] text-[0.8125rem] text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Kiran Kumar
        </p>
        <div className="flex items-center gap-5">
          <a
            href="/blog"
            className="font-[family-name:var(--font-body)] text-[0.8125rem] italic text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            Archive
          </a>
          <a
            href="https://github.com/kiransyd"
            target="_blank"
            rel="noopener noreferrer"
            className="font-[family-name:var(--font-body)] text-[0.8125rem] italic text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
