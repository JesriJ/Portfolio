type ImagePlaceholderProps = {
  label: string;
  className?: string;
  aspectClassName?: string;
};

export function ImagePlaceholder({
  label,
  className = "",
  aspectClassName = "aspect-[16/10]",
}: ImagePlaceholderProps) {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div
      className={`media-frame ${aspectClassName} ${className}`}
      role="img"
      aria-label={`${label} image placeholder`}
    >
      <div className="placeholder-grid" aria-hidden="true" />
      <div className="placeholder-mark" aria-hidden="true">
        {initials || "—"}
      </div>
      <span className="absolute bottom-4 left-4 text-[0.68rem] uppercase tracking-[0.16em] text-cream/35">
        Image forthcoming
      </span>
    </div>
  );
}
