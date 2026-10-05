"use client";

import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
};

/**
 * Lightweight page enter fade without the View Transition API,
 * so chrome like the bottom nav can keep its own slide animation.
 */
export function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
