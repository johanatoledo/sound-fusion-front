export default function Container({
  children,
  className = "",
}) {
  return (
    <div className={`sound-container ${className}`}>
      {children}
    </div>
  );
}