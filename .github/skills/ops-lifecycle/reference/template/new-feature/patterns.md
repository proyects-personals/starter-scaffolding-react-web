---
id: tpl-new-feature-patterns
tipo: Plantilla
title: Patrones y plantillas de codigo para features
description: Plantillas listas para copiar de componente, test y caso de uso; acompana a la plantilla de skill new-feature.
estado: vigente
relaciona: [tpl-new-feature]
status: stable
---

# Patrones: skill `new-feature`

## Proposito

Plantillas de codigo listas para copiar y adaptar al implementar una feature. Complementa la plantilla de flujo ([SKILL.md](../SKILL.md)); aqui solo vive codigo de ejemplo.

## Plantilla de componente de presentacion

```tsx
import { useState } from "react";

import type { JSX } from "react";

/**
 * @description Tarjeta de usuario con acciones de edicion y eliminacion.
 * @author Steveen Cues
 * @version 1.0.0
 * @returns La tarjeta de usuario responsive.
 */
export default function UserCard(): JSX.Element {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <article className="flex flex-col gap-4 rounded-lg bg-base-100 p-4 shadow md:flex-row md:items-center lg:p-6">
      <div className="min-w-0 flex-1">
        <h3 className="text-base font-semibold lg:text-lg">Nombre</h3>
        <p className="text-sm text-base-content/70">Detalle</p>
      </div>
      <div className="flex gap-2">
        <button type="button" className="btn btn-primary btn-sm">Editar</button>
        <button type="button" className="btn btn-ghost btn-sm">Eliminar</button>
      </div>
    </article>
  );
}
```

Puntos clave de la plantilla:

- Layout responsive: `flex-col` en movil, `md:flex-row` en tablet o superior.
- Tokens de DaisyUI: `bg-base-100`, `text-base-content/70`, `btn btn-primary`.
- Tipografia escalonada: `text-base` en movil, `lg:text-lg` en desktop.
- Retorno tipado `(): JSX.Element` y JSDoc completo sin caracteres especiales.

## Plantilla de test unitario

```tsx
import { render, screen } from "@testing-library/react";

import UserCard from "./UserCard";

/**
 * @description Pruebas del componente UserCard.
 * @author Steveen Cues
 * @version 1.0.0
 */
describe("UserCard", () => {
  it("renderiza el nombre del usuario", () => {
    render(<UserCard />);
    expect(screen.getByText("Nombre")).toBeInTheDocument();
  });
});
```

Reglas del test:

- Vive junto al componente: `src/app/presentation/<ruta>/UserCard.test.tsx`.
- `@testing-library/jest-dom` ya esta configurado en `jest.setup.ts`.
- Ejecutar solo lo afectado: `npm test -- UserCard`.

## Plantilla de caso de uso (application)

```ts
/**
 * @description Calcula el total de una lista de items con descuento opcional.
 * @author Steveen Cues
 * @version 1.0.0
 */
export interface CalculateTotalInput {
  items: readonly { readonly price: number }[];
  discount?: number;
}

export function calculateTotal(input: CalculateTotalInput): number {
  const subtotal = input.items.reduce((sum, item) => sum + item.price, 0);
  const discount = input.discount ?? 0;
  return subtotal - subtotal * (discount / 100);
}
```

El test del caso de uso vive en `src/app/application/<ruta>/calculate-total.test.ts` y cubre camino feliz, descuento cero y lista vacia.

## Referencias

| Recurso | Ruta |
|---|---|
| Flujo completo de la feature | [SKILL.md](../SKILL.md) |
| Setup de tests | `jest.setup.ts` del repo que adopta |

## Reglas transversales (recordatorio)

1. Responsive con Tailwind en toda la UI (`sm:`, `md:`, `lg:`, `xl:`).
2. Respetar la estructura en capas; nunca saltarse capas.
3. Pruebas unitarias obligatorias junto al codigo.
4. JSDoc en todos los exports, sin caracteres especiales.
5. Toda cadena visible pasa por `t()` y existe en los 3 locales.
