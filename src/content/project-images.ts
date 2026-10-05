import type { StaticImageData } from "next/image";
import cmpContractors from "@/photos/CMP_Contractors.png";
import cmpJobs from "@/photos/CMP_Jobs.png";
import cmpMain from "@/photos/CMP_Main.png";
import epEmail from "@/photos/EP_Email.png";
import epMain from "@/photos/EP_Main.png";
import epSearch from "@/photos/EP_Search.png";
import tpAlert from "@/photos/TP_alert.png";
import tpMain from "@/photos/TP_Main.png";
import tpWatchlist from "@/photos/TP_Watchlist.png";

/**
 * Quick image controls (edit here):
 * - Swap files by changing `src:`
 * - fit / position are unused when frames match the image size
 *   (kept for optional future cover behavior)
 *
 * Main/big photos should use the *_Main files as `hero.src`.
 */
export type ImageFit = "contain" | "cover";
export type ImagePosition =
  | "top"
  | "center"
  | "bottom"
  | "left"
  | "right"
  | "left top"
  | "right top"
  | "left bottom"
  | "right bottom";

export type ProjectImageAsset = {
  src: StaticImageData;
  alt: string;
  fit?: ImageFit;
  position?: ImagePosition;
};

export type ProjectImages = {
  hero: ProjectImageAsset;
  gallery: ProjectImageAsset[];
};

export const projectImages: Record<string, ProjectImages> = {
  "contractor-marketplace": {
    hero: {
      src: cmpMain,
      alt: "Contractor Marketplace landing page",
      fit: "contain",
      position: "top",
    },
    gallery: [
      {
        src: cmpJobs,
        alt: "Contractor Marketplace jobs board",
        fit: "contain",
        position: "top",
      },
      {
        src: cmpContractors,
        alt: "Contractor Marketplace contractors listing",
        fit: "contain",
        position: "top",
      },
    ],
  },
  "trading-analytics-platform": {
    hero: {
      src: tpMain,
      alt: "Trading analytics platform main dashboard",
      fit: "contain",
      position: "top",
    },
    gallery: [
      {
        src: tpWatchlist,
        alt: "Trading platform watchlist view",
        fit: "contain",
        position: "top",
      },
      {
        src: tpAlert,
        alt: "Trading platform alert view",
        fit: "contain",
        position: "top",
      },
    ],
  },
  "distributed-ai-email-system": {
    hero: {
      src: epMain,
      alt: "Distributed AI email system main interface",
      fit: "contain",
      position: "top",
    },
    gallery: [
      {
        src: epEmail,
        alt: "Email processing detail view",
        fit: "contain",
        position: "top",
      },
      {
        src: epSearch,
        alt: "Email search and classification view",
        fit: "contain",
        position: "top",
      },
    ],
  },
};

export function getProjectImages(slug: string) {
  return projectImages[slug];
}
