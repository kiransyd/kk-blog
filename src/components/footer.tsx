export function Footer() {
  return (
    <footer className="border-t border-[var(--border)]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 px-4 py-8 sm:flex-row sm:px-6">
        <p className="text-[13px] text-[var(--text-muted)]">
          &copy; {new Date().getFullYear()} Kiran Kumar
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/kiransyd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/kiransyd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-[var(--text-muted)] transition-colors hover:text-[var(--text-primary)]"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
