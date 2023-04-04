import type { InputProps } from "../../types";

export default function Input({
  ariaLabel,
  event,
  name,
  placeholder,
  style,
  type,
  value,
  id,
  checked
}: InputProps) {
  return (
    <input
      id={id}
      onChange={event}
      aria-label={ariaLabel}
      className={style}
      name={name}
      value={value}
      placeholder={placeholder}
      type={type}
      checked={checked}
      autoComplete="off"
    />
  );
}
