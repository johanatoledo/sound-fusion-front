export default function FormFieldError({
  id,
  message,
}) {
  if (!message) return null;

  return (
    <p
      id={id}
      className="sound-form-error"
      role="alert"
    >
      {message}
    </p>
  );
}