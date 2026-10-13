import { useTheme } from "@application";
import { Footer, Header, PageWrapper } from "@presentation";

import type { JSX, ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

/**
 * @description Layout global de la aplicación.
 * Mantiene Header, contenido y Footer dentro del mismo wrapper.
 *
 * @param {AppLayoutProps} props Propiedades del layout
 * @returns {JSX.Element} Layout principal de la aplicación
 *
 * @author Steveen Cues
 * @version 1.0.0
 */
export default function AppLayout({ children }: AppLayoutProps): JSX.Element {
  const { theme } = useTheme();

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: theme.colors.surface.background,
        color: theme.colors.text.primary,
      }}
    >
      <PageWrapper>
        <Header />

        <main className="col-span-4 min-w-0 md:col-span-8 lg:col-span-12">
          {children}
        </main>

        <Footer />
      </PageWrapper>
    </div>
  );
}
