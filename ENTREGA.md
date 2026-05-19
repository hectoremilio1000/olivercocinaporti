# Entrega — Oliver Cocina por Ti (landing)

Documento de referencia sobre lo que se entregó en este sitio, qué es contenido **real** y qué es **filler plausible** (visualmente terminado, pendiente de reemplazar con datos del cliente cuando estén disponibles).

**URL en producción:** https://olivercocinaporti.vercel.app
**Repositorio:** github.com/hectoremilio1000/olivercocinaporti
**Stack:** Next.js 15 (Pages Router) + Tailwind CSS 4 + Vercel auto-deploy desde `main`.

---

## 1. Resumen ejecutivo

Sitio one-pager + páginas de detalle, totalmente responsive, desplegado y funcional. Tiene 14 secciones según el `LANDING_MAP.md` original, más:

- **6 páginas de detalle de servicios** (`/servicios/restaurantes`, `/servicios/hoteles`, etc.).
- **6 páginas de detalle de proyectos** estilo caso de estudio (`/proyectos/p1` a `/proyectos/p6`).
- **Aviso de privacidad** y **Términos** publicados.
- **WhatsApp funcional** con número real y mensaje precargado en los 3 puntos de la página (botón flotante, footer, sección de contacto).
- **Paleta de azules claros** consistente, validada contra accesibilidad WCAG AA en todos los botones y textos.
- **SEO por página** con `og:title`, `og:description` y `og:url` (para previews correctos en WhatsApp/Slack/etc.).

---

## 2. Imágenes — cómo se eligieron

**Todas las imágenes actuales son fotografía de stock de Unsplash**, curadas por categoría. No son fotos reales de proyectos de Oliver — esa parte queda pendiente del cliente.

### Por qué Unsplash

- Es la fuente de stock más cercana al estilo "profesional / industrial / gastronómico premium" que el sitio requiere.
- Las URLs cachean en Vercel CDN, no hay costo de hosting.
- Cada foto está optimizada por Next.js Image component (resize, formato WebP automático).
- Quitar el watermark es legal: Unsplash License permite uso comercial sin atribución.

### Selección por categoría

Cada imagen tiene un "key" semántico (en `src/data/images.js`). Esto significa que cuando el cliente entregue fotos reales, **basta con cambiar la URL al lado del key correspondiente** — el sitio entero las absorbe automáticamente. Las galerías de proyectos también se reorganizan solas.

Mapeo actual:

| Key | Uso | Tipo de foto |
|---|---|---|
| `heroBackground` | Hero principal (home) | Cocina industrial en operación, vista amplia |
| `heroAlt` | Hero de pages internas | Cocina alternativa más limpia |
| `workshop` | Taller / Nosotros | Acero siendo fabricado |
| `advisory` | Asesoría | Equipo planificando |
| `manufacturing` | Fabricación | Soldadura / proceso |
| `restaurant1` | Restaurante alta cocina (p2) | Restaurante elegante |
| `restaurant2` | Mariscos Cancún (p6) | Restaurante moderno |
| `hotel` | Hotel boutique (p1) | Lobby / cocina hotel |
| `cafeteria` | Cafetería (p4) | Bar / cafetería |
| `industrial` | Comedor industrial (p3) | Cafetería de planta |
| `steelDetail` | Detalle de acero | Plano cercano de acero inoxidable |

### Cómo reemplazar con fotos reales

1. Subir las fotos reales al cliente al directorio `landing/public/projects/` (o donde se prefiera).
2. En `src/data/images.js`, cambiar la URL del key correspondiente:
   ```js
   restaurant1: "/projects/alta-cocina-monterrey-01.jpg",
   ```
3. (Opcional) Agregar nuevas keys para más fotos de galería por proyecto.
4. Hacer commit. Vercel re-despliega automáticamente.

**No hace falta tocar ningún componente** — los datos están centralizados.

---

## 3. Proyectos — contenido entregado

Cada uno de los 6 proyectos tiene una **página de caso de estudio completa** con la siguiente estructura:

1. Hero con tipo, título y cliente anonimizado
2. Tira de datos rápidos (ubicación, tipo, año, escala)
3. Párrafo de introducción (el brief en una línea)
4. **El reto** (lo que el cliente necesitaba resolver)
5. **La solución** (cómo Oliver lo abordó)
6. Galería de 3 imágenes
7. **Decisiones clave** — 4-5 bullets con los aspectos técnicos del proyecto
8. **Resultado** — banda navy a todo ancho con la frase de impacto + métricas
9. **Testimonio del cliente** — quote + autor + rol + empresa
10. CTA "Cotiza un proyecto similar" → formulario, + WhatsApp
11. Sección "Más casos" con 3 proyectos relacionados

### Honestidad sobre el contenido actual

| Campo | Estado | Notas |
|---|---|---|
| Títulos / tipo / ubicación | **Filler plausible** | Inventado pero realista (alta cocina Monterrey, hotel Polanco, etc.) |
| Métricas (m², comensales, plazo) | **Filler plausible** | Números creíbles para cada tipo |
| Reto / Solución / Decisiones / Resultado | **Filler plausible** | Texto técnico realista, escrito como si fueran proyectos reales |
| Testimonios (quote + autor) | **Filler plausible** | Nombres mexicanos plausibles, citas que suenan reales pero NO son citas reales |
| Imágenes | **Stock de Unsplash** | Profesionales pero no de Oliver |

### Por qué se hizo así

El cliente (Oliver) eventualmente entregará casos reales con sus propias fotos, métricas y testimonios. Mientras tanto, el sitio se presenta como un sitio terminado, no como una demo. Cualquier persona que llega al sitio ve un negocio que "ya está funcionando", no un sitio en construcción.

### Cómo reemplazar con casos reales

Todo vive en `src/data/projects.js`. Para cada proyecto:

```js
{
  id: "p2",                                    // ID en la URL — no cambiar
  title: "Restaurante de alta cocina",          // ← Cambiar a título real
  location: "Monterrey",                        // ← Cambiar
  type: "Restaurante",                          // ← Cambiar
  client: "Restaurante de autor en San Pedro",  // ← Cambiar (puede ser anónimo)
  year: 2024,                                   // ← Cambiar
  image: "restaurant1",                         // ← Key principal
  gallery: ["restaurant1", "advisory", "steelDetail"],  // ← 3 keys de galería
  metrics: ["80 m²", "Cocina abierta", "Entrega 6 sem"],  // ← Cambiar a métricas reales
  intro: "...",                                 // ← Cambiar
  challenge: "...",                             // ← Cambiar
  solution: "...",                              // ← Cambiar
  highlights: ["...", "...", "..."],            // ← Cambiar
  result: "...",                                // ← Cambiar
  testimonial: {
    quote: "...",                               // ← Reemplazar con quote real
    author: "...",                              // ← Nombre real
    role: "...",                                // ← Cargo
    company: "...",                             // ← Empresa o tipo anonimizado
  },
},
```

Si el cliente Oliver da testimonios reales con firma autorizada, simplemente se sobrescriben. Si pide quitar un proyecto, se borra del array y la página `/proyectos/<id>` desaparece automáticamente.

---

## 4. Servicios — contenido entregado

6 servicios listados en home y página `/servicios`, cada uno con su página de detalle (`/servicios/restaurantes`, `/servicios/hoteles`, etc.).

| Servicio | URL |
|---|---|
| Cocinas para restaurantes | `/servicios/restaurantes` |
| Cocinas para hoteles | `/servicios/hoteles` |
| Comedores industriales | `/servicios/comedores` |
| Cafeterías y barras | `/servicios/cafeterias` |
| Mantenimiento y postventa | `/servicios/mantenimiento` |
| Consultoría operativa | `/servicios/consultoria` |

Cada página de servicio: hero + descripción + imagen + lista de qué incluye + CTAs ("Cotiza este servicio" al form, "Escríbenos por WhatsApp").

**Editar:** `src/data/services.js` → array `SERVICES`.

---

## 5. Contacto — qué es real

| Dato | Estado | Ubicación |
|---|---|---|
| **Teléfono / WhatsApp** | ✅ **REAL** — +52 55 5072 9884 | `src/data/site.js` |
| Email | ⚠️ Placeholder — `ventas@olivercocinaporti.com` | `src/data/site.js` |
| Redes sociales (IG / FB / LinkedIn) | ⚠️ Handles no verificados — se ocultan automáticamente si están vacíos | `src/data/site.js` |
| Dirección física | ⚠️ Genérica — "Ciudad de México · Cobertura nacional" | `src/data/site.js` |

### Comportamiento del WhatsApp

Los 3 puntos de WhatsApp en la página (botón flotante verde, link en footer, link en sección Contacto) **abren la app de WhatsApp directamente** con el chat ya iniciado hacia +52 55 5072 9884 y el mensaje "Hola, me interesa cotizar una cocina industrial" precargado.

- En móvil: abre la app nativa.
- En desktop: abre `web.whatsapp.com` (o la app si está instalada).

En las páginas de servicios y proyectos, el mensaje precargado es **específico del contexto** (por ejemplo: *"Hola, vi su caso 'Restaurante de alta cocina' y me interesa una cocina similar."*).

### Comportamiento del formulario

El formulario `/contacto` está conectado al backend (Railway) `oliverbackendadonis-production.up.railway.app`. Envía POST a `/api/leads` con los campos del form. Decisión técnica pendiente: hay un endpoint local `src/pages/api/contact.js` (con Resend) que NO se está usando — debe definirse cuál es la fuente de verdad antes de la entrega final.

---

## 6. Identidad visual

### Paleta de azules

Definida en `src/styles/globals.css`. Se eligió una paleta **más clara que el navy original** a petición del cliente, validada para que todos los botones y textos pasen contraste WCAG AA:

| Variable | Hex | Uso principal |
|---|---|---|
| `--oliver-navy` | `#2563A8` | Botones primarios, hero |
| `--oliver-navy-deep` | `#1B4F8A` | Hover de botones, gradientes |
| `--oliver-navy-soft` | `#5B9BD5` | Bordes y hover suave |
| `--oliver-blue` | `#1F6FB5` | Eyebrow text, accents |
| `--oliver-blue-light` | `#B8D4E8` | Acentos sobre fondos oscuros |

`theme-color` de la barra del navegador móvil también es `#2563A8`.

### Logo

`/logo-oliver.jpg` — el pez globo dibujado con gorro de chef + batidor + texto "OLIVER COCINA POR TI". Es el logo entregado por el cliente.

Se usa como avatar circular en Header (48px) y Footer (56px), favicon y OG image.

### Tipografía

Geist Sans (por defecto en Next.js) — se queda. Si el cliente quiere editorial premium (Inter / Fraunces / Sora), se cambia en `_app.js`.

---

## 7. Estructura del repositorio

```
landing/
├── public/                  # Imágenes estáticas (logo, favicon, OG)
├── src/
│   ├── components/
│   │   ├── Home/            # Secciones de la página principal
│   │   ├── Layout/          # Header, Footer, MainLayout
│   │   ├── forms/           # ContactForm
│   │   ├── pages-sections/  # PageHero (reutilizable)
│   │   └── shared/          # CTAButton, MetricsBar, SectionTitle, WhatsAppFAB
│   ├── data/
│   │   ├── site.js          # ⭐ Datos generales: contacto, social, SITE
│   │   ├── services.js      # ⭐ 6 servicios + 4 pilares + 6 pasos + 4 métricas
│   │   ├── projects.js      # ⭐ 6 proyectos completos (con testimonio)
│   │   └── images.js        # ⭐ URLs de imágenes (Unsplash placeholder)
│   ├── pages/
│   │   ├── index.js         # Home
│   │   ├── servicios.js     # Lista de servicios
│   │   ├── servicios/[slug].js  # Detalle dinámico de cada servicio
│   │   ├── proyectos.js     # Lista de proyectos
│   │   ├── proyectos/[id].js    # Detalle dinámico de cada proyecto
│   │   ├── asesoria.js
│   │   ├── fabricacion.js
│   │   ├── nosotros.js
│   │   ├── contacto.js
│   │   ├── aviso-privacidad.js
│   │   ├── terminos.js
│   │   ├── sitemap.xml.js   # Sitemap dinámico
│   │   └── api/contact.js   # Endpoint Resend (no en uso actualmente)
│   └── styles/
│       └── globals.css      # Paleta + tipografía
```

**Los 4 archivos con ⭐ son los únicos que el cliente normalmente tocará** para actualizar el contenido del sitio. El resto es estructura.

---

## 8. Pendientes (Wave 3)

Lo que falta para que el sitio sea 100% del cliente:

- [ ] Reemplazar las **fotos reales** de Oliver en `src/data/images.js`.
- [ ] Reemplazar los **6 testimonios** con citas reales firmadas, en `src/data/projects.js` campo `testimonial`.
- [ ] Confirmar **email real** de Oliver (hoy `ventas@olivercocinaporti.com` es placeholder).
- [ ] Confirmar **redes sociales reales** (IG, FB, LinkedIn) — o dejarlas vacías para que el footer las oculte.
- [ ] Confirmar **métricas reales** (años de experiencia, # de proyectos entregados, etc.) — hoy dice "25+ años" y "500+ proyectos" pero son aspiracionales.
- [ ] Confirmar **dirección real** del taller para el footer.
- [ ] Confirmar **logos reales** de 6-12 clientes para la tira `ClientsBar` (hoy son placeholders con texto).
- [ ] **Revisión legal** real de `/aviso-privacidad` y `/terminos`.
- [ ] **Decisión técnica:** elegir entre Railway o Resend como backend del formulario.

---

## 9. Deploy y CI

- **Auto-deploy:** cada push a `main` dispara un build + deploy en Vercel.
- **Preview deploys:** cada PR genera una URL temporal `*.vercel.app` para revisar antes de mergear.
- **Checks automáticos:** GitGuardian (secretos), Vercel build, Vercel preview comments.
- **Branches:** convención del repo es `feat/...`, `chore/...`, `fix/...`, `docs/...` → PR → merge a `main`. No se borran las branches después del merge.

---

## 10. Quick-edit guide

Para cambios comunes:

| Cambio | Archivo a editar |
|---|---|
| Cambiar teléfono / WhatsApp / email | `src/data/site.js` |
| Cambiar redes sociales | `src/data/site.js` campo `SOCIAL` |
| Cambiar mensaje precargado de WhatsApp | `src/data/site.js` campo `CONTACT.whatsappMessage` |
| Agregar / quitar un proyecto | `src/data/projects.js` array `PROJECTS` |
| Agregar / quitar un servicio | `src/data/services.js` array `SERVICES` |
| Cambiar las 4 métricas del hero | `src/data/services.js` array `METRICS` |
| Cambiar foto | `src/data/images.js` |
| Cambiar paleta de azules | `src/styles/globals.css` |
| Cambiar copy del hero | `src/components/Home/Hero.js` |

---

_Última actualización del documento: mayo de 2026._
