# GZPL

Tarjeta de presentación de un despacho de abogados. Next.js App Router, TypeScript, CSS y fuentes locales. Una sola página, sin formularios, analítica ni animaciones.

## Desarrollo

```sh
npm ci
npm run dev
```

## Comprobación y publicación

```sh
npm run lint
npm run typecheck
npm run build
```

Importar el repositorio en Vercel con el preset Next.js. No necesita variables de entorno ni base de datos. `npm run start` sirve la compilación de producción.

## Contenido pendiente

Editar `lib/content.ts`: nombre comercial provisional, email (legal@gzpl.com es un ejemplo y no un buzón verificado), nombre completo de Francis (Francisco Beltrán es ficticio), nombres completos restantes y descripción. No se han inventado empleadores, clientes ni méritos individuales. Incorporar las trayectorias verificadas cuando se reciban; el boceto actual dedica una sección a cada responsable, con descripción y tres tipos de asuntos propuestos para validar.

La indexación está deshabilitada de forma explícita: metadatos `noindex, nofollow` en `app/layout.tsx`, cabecera HTTP `X-Robots-Tag` en `next.config.ts` y `Disallow: /` para todos los agentes en `app/robots.txt`. Estas reglas no dependen de `firm.preview`. Revisar las tres configuraciones cuando se decida abrir la web a buscadores. No se muestra un aviso de propuesta en la página. Noindex no restringe el acceso: para una revisión privada, activar protección de despliegue en Vercel.

La fotografía es conceptual, generada con IA; no representa las instalaciones reales del despacho. Está en `public/images/architecture.png` y se entrega optimizada mediante next/image. Las fuentes Cormorant Garamond y Manrope se sirven localmente desde los paquetes @fontsource.

## Dirección visual

Paleta: negro #000000, oro #C4AA76, texto #E9E4DA, texto secundario #C2BDB4 y líneas #423822. Cormorant Garamond en marca/titulares y Manrope en textos funcionales. Se conserva la fotografía original de pilares, sin filtros. Sin cabecera; presentación dividida con GZPL y Abogados en la misma familia tipográfica y cinco secciones con responsable, descripción y asuntos. En móvil, composición a una columna. Sin CTA ni movimiento; pie con GZPL Abogados y email en la línea siguiente. Única reflexión original, sin atribución: «Comprender el fondo. Cuidar cada detalle.».

Imagen creada con la herramienta integrada ImageGen. Prompt del recurso: “Standalone architectural photograph: monumental pale limestone square piers in receding perspective, diagonal afternoon sun and shadows, subtle stone grain, floor in lower quarter, portrait 3:4. No people, furniture, text, logos or tint overlay.”
