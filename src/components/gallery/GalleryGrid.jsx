import GalleryCard from "@/components/gallery/GalleryCard";

export default function GalleryGrid({
  items = [],
  columns = "default",
}) {
  if (!Array.isArray(items) || items.length === 0) {
    return (
      <p className="sound-text-muted">
        No gallery items are currently available.
      </p>
    );
  }

  const gridClasses =
    columns === "wide"
      ? "grid gap-6 md:grid-cols-2"
      : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={gridClasses}>
      {items.map((item) => (
        <GalleryCard
          key={item.id}
          image={item.image}
          alt={item.alt}
          title={item.title}
          category={item.category}
          className={item.className || ""}
        />
      ))}
    </div>
  );
}