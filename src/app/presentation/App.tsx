import { ThemeSelector } from "@steveencues/starter-react-ui";
import type { JSX } from "react";

export default function App(): JSX.Element {
  return (
    <main className="min-h-screen bg-base-200 p-6 text-base-content">
      <div className="mx-auto max-w-md">
        <ThemeSelector />
      </div>
    </main>
  );
}