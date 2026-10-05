"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { navItems } from "@/content/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function BottomNav() {
  const pathname = usePathname();
  const listRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const coordsRef = useRef({ left: 0, width: 0 });
  const hasPositioned = useRef(false);
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const moveToActive = (animate: boolean) => {
      const activeIndex = navItems.findIndex((item) =>
        isActive(pathname, item.href),
      );
      const activeEl = itemRefs.current[activeIndex];
      const pill = pillRef.current;
      if (!activeEl || !pill) return;

      const next = {
        left: activeEl.offsetLeft,
        width: activeEl.offsetWidth,
      };
      const prev = coordsRef.current;
      const shouldAnimate =
        animate && hasPositioned.current && !reduceMotion;

      pill.getAnimations().forEach((animation) => animation.cancel());
      pill.style.left = `${next.left}px`;
      pill.style.width = `${next.width}px`;
      coordsRef.current = next;
      hasPositioned.current = true;
      setReady(true);

      if (!shouldAnimate) return;

      pill.animate(
        [
          { left: `${prev.left}px`, width: `${prev.width}px` },
          { left: `${next.left}px`, width: `${next.width}px` },
        ],
        {
          duration: 340,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
        },
      );
    };

    moveToActive(true);
    const onResize = () => moveToActive(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [pathname]);

  return (
    <nav aria-label="Primary" className="bottom-nav" ref={listRef}>
      <span
        ref={pillRef}
        className={`nav-indicator${ready ? " is-ready" : ""}`}
        aria-hidden="true"
      />
      {navItems.map((item, index) => {
        const current = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            aria-current={current ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
