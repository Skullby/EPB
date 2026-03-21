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

## Instrumentación mínima de CTA
- `src/lib/analytics.ts` expone `trackCTAEvent`, que empuja un evento `cta_engagement` a `window.dataLayer` (o lo loguea en consola si falta la capa de analítica).
- Cada llamada incluye `name`, `section`, `label` y `timestamp`, por lo que es fácil filtrar eventos por canal.

### Eventos clave expuestos hoy
| Nombre del evento | Sección | Dónde aparece |
| --- | --- | --- |
| `header_calendar_click` | Header principal | Botón “Agendar llamada” del header sticky |
| `hero_proposal_click` | Hero | CTA principal “Quiero una propuesta” |
| `hero_services_click` | Hero | CTA “Ver servicios” |
| `quick_action_diagnostico` | Acciones rápidas | Tarjeta “Pedir diagnóstico” |
| `quick_action_whatsapp` | Acciones rápidas | Tarjeta “Hablar por WhatsApp” |
| `quick_action_propuesta` | Acciones rápidas | Tarjeta “Solicitar propuesta” |
| `contact_whatsapp_click` | Sección contacto | botón WhatsApp en el panel de contacto |
| `contact_email_click` | Sección contacto | botón Email |
| `contact_linkedin_click` | Sección contacto | botón LinkedIn |
| `floating_whatsapp_click` | CTA flotante | Botón flotante de WhatsApp en la esquina |

### Cómo validar la capa
1. Ejecutar `npm run dev` o desplegar localmente y abrir el sitio.
2. En la consola del navegador, escribir `window.dataLayer` y verificar que sea un array (o observar los logs en consola si no existe).
3. Hacer clic en una CTA instrumentada y confirmar que un evento `cta_engagement` se empuja con el nombre esperado y la etiqueta correspondiente.
4. Una vez desplegado en staging o prod, revisar el canal de analítica final (GA4, Segment, etc.) para asegurarse de que lleguen los eventos.

### Dónde está cableada la instrumentación

- `src/lib/analytics.ts` expone `trackCTAEvent`, que empaqueta cada CTA en un `cta_engagement` con `name`, `section`, `label` y `timestamp`. Si `window.dataLayer` existe se empuja allí, y si no hay capa de analítica la utilidad hace `console.info` para que puedas validar localmente.
- `src/App.tsx` usa `handleCTA` para conectar ese helper con el header (botón de calendario), hero (`Quiero una propuesta` y `Ver servicios`), tarjetas de acciones rápidas (`quick_action_*`), los botones de contacto y el CTA flotante de WhatsApp. Cada llamada añade metadatos consistentes para que el proveedor final pueda filtrar por sección y etiqueta.


## Ruta de despliegue productivo
1. **Target**: publicar en Vercel dentro del equipo “EPB Digital” conectando el repositorio `Skullby/EPB`. Una vez validado, apuntar el dominio personalizado (por ejemplo `https://epb.digital`) a la URL generada por Vercel.
2. **Comandos reproducibles**:
   - `npm install`
   - `npm run build` (compila y verifica que TypeScript está limpio)
   - `npm run lint` (asegura el estilo y evita errores de sintaxis)
   - `npm run preview -- --host 0.0.0.0 --port 4173` para probar un build idéntico al de producción.
3. **Configuración de Vercel**:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Framework: Vite.
   - No se requieren variables de entorno adicionales por ahora.
4. **Validación post-deploy**:
   - Navegar al dominio asignado y verificar que el hero y las secciones se cargan sin errores.
   - Confirmar que los eventos `cta_engagement` aparecen en la consola o en el proveedor de analítica conectado.
   - Verificar accesos directos claves (WhatsApp, calendario, LinkedIn) y enlaces q sigan funcionando.

## Checklist previo al corte
- [x] `npm run build`
- [x] `npm run lint`
- [ ] Validar dominio finalizado y apuntado (p. ej. `epb.digital`).
- [ ] Registrar el evento `cta_engagement` en el proveedor analítico destino.
