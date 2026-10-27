# Portfolio · Arturo Alarcón

Portfolio personal de Luis Arturo Alarcón Blanco (Ingeniero de Software | Desarrollador · Integración de IA). Es una SPA de una sola página con las secciones Inicio, Proyectos, Sobre mí, Skills, Experiencia y Contacto. Está disponible en **español e inglés** y tiene **tema claro y oscuro**.

## Stack y comandos

- React 19 + Vite 7 (SWC) y `react-icons`. No usa router ni librería de estado; el CSS es plano.
- `yarn dev` · `yarn build` · `yarn lint`
- Se despliega en GitHub Pages con `.github/workflows/deploy.yml` al hacer push a `master`. El workflow usa `yarn install --frozen-lockfile`, así que cualquier dependencia nueva debe actualizar `yarn.lock`.
- `vite.config.js` usa `base: "/portfolio/"`. Las rutas a `public/` se arman con `import.meta.env.BASE_URL`, nunca con `/` fijo.

## Estructura

```
src/
  App.jsx                  Layout: fondo decorativo, header, secciones y footer
  main.jsx                 Monta <App /> dentro de <LanguageProvider>
  index.css                Estilos globales, variables de tema y animaciones
  i18n/
    LanguageContext.jsx    Provider, hook useLanguage() y helper localize()
    translations.js        Textos de la interfaz { es, en }
  data/
    experience.js          Experiencia laboral { es: [...], en: [...] }
    projects.js            Proyectos (campos de texto como { es, en })
    techStack.js           Tecnologías, categoría y color de marca (sin traducción)
  hooks/                   useInView (scroll reveal), useScrollSpy, useTheme
  utils/                   pointer.js (spotlight/inclinación), experience.js (duración, iniciales)
  components/              Header, Reveal, SectionHeading, Counter, ProjectCard, ProjectModal, TechStack
  sections/                Hero, Projects, About, Skills, Experience (línea del tiempo), Contact
public/files/              CVs en PDF (ES y EN)
```

## Reglas

### 1. Idiomas (español / inglés)

- **No escribas textos visibles directamente en el JSX.** Todo texto va en `src/i18n/translations.js` y se lee con `const { t } = useLanguage()`.
- Cada clave nueva se agrega en **`es` y en `en`** a la vez, con la misma estructura.
- En los datos de `src/data/`, los campos de texto usan `{ es, en }` y se resuelven con `localize(valor, lang)`. Los nombres propios (tecnologías, empresas) pueden quedarse como string simple.
- `experience.js` usa arreglos separados por idioma (`experience[lang]`).
- El idioma se guarda en `localStorage` (`lang`). `LanguageProvider` actualiza `<html lang>` y `document.title`.
- El botón "Ver CV" apunta a `t.hero.cvFile`:
  - `public/files/Luis_Arturo_Alarcon_CV_ES.pdf`
  - `public/files/Luis_Arturo_Alarcon_CV_EN.pdf`
- El **resumen** (hero y "Sobre mí") y la **experiencia** deben coincidir con los CVs. Si un CV cambia, actualiza también estos textos en ambos idiomas.

### 2. Tema claro / oscuro

- El tema se controla con el atributo `data-theme` en `<html>` (`dark` por defecto, `light` opcional) y se guarda en `localStorage` (`theme`).
- Los colores se definen como variables en `:root` (oscuro) y se sobrescriben en `:root[data-theme='light']` dentro de `src/index.css`.
- **Usa siempre las variables** (`--bg`, `--bg-soft`, `--text`, `--text-muted`, `--accent`, `--border-subtle`, etc.) en lugar de colores fijos.
- Si un componente necesita un color distinto en tema claro, agrega su override con `:root[data-theme='light'] .clase`.
- Revisa cada cambio visual en **ambos temas** y en móvil (breakpoints de 900px y 640px).

### 3. Código reutilizable

- Antes de crear algo nuevo, busca si ya existe. Reutiliza las clases `card`, `spotlight`, `chip`, `pill`, `tag`, `btn`, `mini-card`, `link-btn`, `check-list` y los componentes de `components/`.
- Las animaciones de entrada usan `<Reveal>` (o `useInView`). Respeta `prefers-reduced-motion`: ya hay un bloque global al final de `index.css`.
- El contenido (proyectos, experiencia, skills) vive en `src/data/` y se renderiza con `.map()`; no repitas bloques de JSX.
- Si una sección crece, extráela a `src/sections/`. Las piezas pequeñas que se repiten van a `src/components/`.
- Mantén el estilo existente: componentes funcionales, hooks y nombres descriptivos.

### 4. Comentarios

- Los comentarios deben ser **breves** y solo van donde aportan: lógica que no es obvia, workarounds o decisiones importantes.
- No comentes lo evidente, no pongas un comentario en cada bloque y no escribas explicaciones largas ni párrafos generados.
- Los comentarios se escriben en español, como el resto del proyecto.
