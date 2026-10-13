import type { JSX } from "react";

/**
 * @description Icono Chevron para elementos de navegación.
 *
 * @returns {JSX.Element} Icono Chevron
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function ChevronIcon(): JSX.Element {
  return (
    <svg
      className="h-3 w-3 opacity-60"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}
