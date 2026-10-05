import Link from "next/link";
import { PageTransition } from "@/components/PageTransition";

export default function NotFound() {
  return (
    <PageTransition>
      <div className="page-shell">
        <h1 className="display text-[clamp(4rem,10vw,7rem)] text-cream">404</h1>
        <p className="mt-6 max-w-md text-cream-secondary">
          This page could not be found.
        </p>
        <Link
          href="/"
          className="mt-10 inline-block text-sm text-cream-secondary underline-offset-4 hover:text-cream hover:underline"
        >
          Return home →
        </Link>
      </div>
    </PageTransition>
  );
}
