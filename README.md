# Web de marca personal – Pedro Abanto Vásquez
Sitio estático (HTML + CSS + JS). Sin backend.

## Estructura
`index.html` · `css/styles.css` · `js/main.js` (datos editables arriba) · `assets/logo.svg` (monograma y favicon)

## Editar datos
En `js/main.js`, objeto `CONFIG`: WhatsApp, correo, `instagram`, `facebook` (si están vacíos, el enlace del pie de página se oculta) y `formEndpoint`.

## Formulario (no envía hasta conectarlo)
1. Crea cuenta gratis en formspree.io y un formulario nuevo con tu correo.
2. Copia la URL (`https://formspree.io/f/xxxxxxx`) en `formEndpoint`.
3. Haz una prueba de envío y confirma el correo de Formspree.

## Publicar en GitHub Pages
1. Crea un repositorio público en github.com (ej. `pedroabanto-web`).
2. Sube todos los archivos (incluido `.nojekyll`) o usa: `git init`, `git add .`, `git commit -m "Primera versión"`, `git branch -M main`, `git remote add origin URL_DEL_REPO`, `git push -u origin main`.
3. En el repositorio: Settings → Pages → Source: *Deploy from a branch* → `main` / `/ (root)` → Save.
4. En 1–2 minutos quedará en `https://TU-USUARIO.github.io/NOMBRE-REPO/`.

## Dominio propio (después)
1. Compra el dominio. En su DNS crea 4 registros A hacia `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` y un CNAME `www` → `TU-USUARIO.github.io`. (Verifica estas IP en la documentación oficial de GitHub Pages.)
2. Crea un archivo `CNAME` en la raíz con solo tu dominio (ej. `pedroabanto.com`).
3. Settings → Pages → Custom domain y activa *Enforce HTTPS*.
4. Reemplaza `TU-DOMINIO.com` en `index.html` (canonical y Open Graph).

## Pendiente recomendado
- Crear `assets/og.png` (1200×630) para la vista previa al compartir.
- Opcional: tu fotografía profesional y número de colegiatura.
