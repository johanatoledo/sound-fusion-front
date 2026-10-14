export default function ContactInput({
  id,
  label,
  required = false,
  error,
  className = "",
  ...props
}) {
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label
        htmlFor={id}
        className="sound-form-label"
      >
        {label}

        {required && (
          <span className="sound-form-required">
            *
          </span>
        )}
      </label>

      <input
        id={id}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? errorId : undefined
        }
        className={`sound-input ${
          error ? "sound-input-error" : ""
        }`}
        {...props}
      />

      {error && (
        <p
          id={errorId}
          className="sound-form-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}