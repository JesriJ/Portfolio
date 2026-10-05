"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;

    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY.current;

      setScrolled(y > 12);

      if (y < 48) {
        setHidden(false);
      } else if (delta > 6) {
        setHidden(true);
      } else if (delta < -6) {
        setHidden(false);
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`site-header fixed inset-x-0 top-0 z-40 ${
        hidden ? "site-header-hidden" : ""
      } ${scrolled ? "site-header-scrolled" : ""}`}
    >
      <div className="relative z-40 mx-auto flex w-full items-center justify-between px-[var(--page-pad-x)] py-5">
        <Link
          href="/"
          aria-label={site.name}
          className="text-sm tracking-[0.08em] text-cream transition-colors hover:text-cream-secondary"
          style={{ fontWeight: "600" }}
        >
          Jesri J.
        </Link>
        <nav aria-label="Social" className="flex items-center gap-5 text-sm">
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
          <a href={site.resumeHref} className="link-quiet hidden sm:inline">
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
