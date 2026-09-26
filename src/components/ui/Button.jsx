import Link from "next/link";

export default function Button({
  href,
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  className = "",
  ...props
}) {
  const variantClass =
    variant === "secondary"
      ? "sound-button-secondary"
      : "sound-button-primary";

  const classes = `${variantClass} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}