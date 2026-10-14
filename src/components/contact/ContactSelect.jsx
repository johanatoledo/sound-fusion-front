export default function ContactSelect({
  id,
  label,
  value,
  options,
  onChange,
  required = false,
  error,
}) {
  const errorId = `${id}-error`;

  return (
    <div>
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

      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? errorId : undefined
        }
        className={`sound-input ${
          error ? "sound-input-error" : ""
        }`}
      >
        <option value="">
          Select an option
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

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