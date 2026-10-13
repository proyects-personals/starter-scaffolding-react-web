import type { IPageWrapperProps } from "@presentation";
import type { JSX } from "react";

/**
 * @description Wrapper global responsive de la aplicación.
 * Mantiene un sistema de grid de 4, 8 y 12 columnas
 * con espaciado horizontal consistente en todos los breakpoints.
 *
 * @param {PageWrapperProps} props Propiedades del wrapper
 * @returns {JSX.Element} Wrapper global
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function PageWrapper({
  children,
  className = "",
}: IPageWrapperProps): JSX.Element {
  return (
    <div
      className={`
        mx-auto
        grid
        min-h-screen
        w-full
        max-w-[1600px]
        grid-cols-4
        gap-4
        px-4
        sm:px-6
        md:grid-cols-8
        md:gap-6
        md:px-8
        lg:grid-cols-12
        lg:gap-8
        lg:px-10
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}
