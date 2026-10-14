export default function ContactCheckboxGroup({
  legend,
  options,
  selectedValues,
  onChange,
  required = false,
  error,
}) {
  return (
    <fieldset>
      <legend className="sound-form-label">
        {legend}

        {required && (
          <span className="sound-form-required">
            *
          </span>
        )}
      </legend>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {options.map((option) => {
          const selected =
            selectedValues.includes(
              option.value
            );

          return (
            <label
              key={option.value}
              className={`sound-service-option ${
                selected
                  ? "sound-service-option-selected"
                  : ""
              }`}
            >
              <input
                type="checkbox"
                value={option.value}
                checked={selected}
                onChange={() =>
                  onChange(option.value)
                }
                className="sr-only"
              />

              <span className="sound-service-check">
                {selected ? "✓" : ""}
              </span>

              <span>
                {option.label}
              </span>
            </label>
          );
        })}
      </div>

      {error && (
        <p
          className="sound-form-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </fieldset>
  );
}