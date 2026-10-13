import { AppLayout } from "@presentation";

import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <AppLayout>
      <section className="flex min-h-[calc(100vh-5rem)] items-center justify-center">
        <div className="w-full max-w-md">{/* Contenido */}</div>
      </section>
    </AppLayout>
  );
}
