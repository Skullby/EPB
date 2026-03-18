# EPB V1

Landing page comercial para EPB Digital construida con React, Vite, TypeScript y Tailwind CSS.

## Stack
- React 19
- Vite 8
- TypeScript
- Tailwind CSS 3.4

## Qué incluye
- Hero con propuesta de valor y CTA principal
- Secciones de servicios, proceso, diferenciales, equipo, clientes y contacto
- Accesos directos a WhatsApp, email, LinkedIn y agenda comercial
- Diseño responsive base para mobile, tablet y desktop
- Ajustes básicos de accesibilidad: skip link, foco visible y labels en enlaces clave

## Desarrollo
```bash
npm install
npm run dev
```

## Build y validación
```bash
npm run build
npm run lint
```

## Estructura
```text
src/
  App.tsx      # Landing principal
  index.css    # Tailwind + estilos globales
  main.tsx     # Bootstrap de React
public/
  favicon.svg
  icons.svg
```

## Placeholders actuales
- Foto/visual del equipo o founder en la sección “Quiénes somos”
- Logos de clientes en la sección “Clientes”
- Enlaces comerciales de ejemplo (WhatsApp, Cal, LinkedIn, email) si todavía no son los definitivos

## Siguiente paso recomendado
Reemplazar placeholders por activos reales, conectar analítica/eventos y publicar en hosting productivo (Vercel/Netlify o equivalente).
