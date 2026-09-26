export default function SectionTitle({
  label,
  title,
  description,
  centered = false,
  children,
}) {
  const alignment = centered
    ? "mx-auto text-center"
    : "";

  return (
    <div className={`max-w-3xl ${alignment}`}>
      {label && (
        <span className="sound-section-label">
          {label}
        </span>
      )}

      {title && (
        <h2 className="sound-section-title">
          {title}
        </h2>
      )}

      {children}

      {description && (
        <p
          className={`sound-section-description ${
            centered ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}