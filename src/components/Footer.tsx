import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-cream/10">
      <div className="mx-auto flex w-full flex-col gap-4 px-[var(--page-pad-x)] py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm text-cream">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.title}</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <div className="flex gap-4 text-sm">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              LinkedIn
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-quiet"
            >
              GitHub
            </a>
            <a href={`mailto:${site.email}`} className="link-quiet">
              Email
            </a>
          </div>
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
