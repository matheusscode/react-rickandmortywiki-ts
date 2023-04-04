import type { ButtonProps } from "../../types";

export default function Button({ children, event, style }: ButtonProps) {
  return (
    <button onClick={event} className={style}>
      {children}
    </button>
  );
}
