import Image from "next/image";
import type { ProjectImageAsset } from "@/content/project-images";

type ProjectMediaProps = {
  image: ProjectImageAsset;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function ProjectMedia({
  image,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, min(1200px, 92vw)",
}: ProjectMediaProps) {
  return (
    <div className={`media-frame media-frame-photo mx-auto w-full ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.src.width}
        height={image.src.height}
        priority={priority}
        quality={100}
        sizes={sizes}
        unoptimized
        className="h-auto w-full"
      />
    </div>
  );
}
