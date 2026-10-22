# Menú Misional — Barrio Leon Creek

Sitio web móvil e interactivo para ayudar a los miembros a escoger acciones concretas para apoyar la obra misional.

## Funciones

- Explorar por grupo: Niños, Jóvenes, Mujeres, Hombres, Familias.
- Explorar por actividad: Orar, Amar y Servir, Compartir, Invitar, Iglesia, Misioneros, Referencias, Investigadores, Nuevos Miembros, Miembros que Regresan, Templo e Historia Familiar, Sacerdocio.
- Dentro de cada actividad, filtrar otra vez por Niños, Jóvenes, Mujeres, Hombres o Familias.
- Actividades ordenadas de Fácil → Intermedio → Más participación.
- Botón “Dame una idea para hoy”.
- Botón “Tengo 5 minutos”.
- “Mi semana”: guarda localmente en el teléfono las actividades elegidas.
- Compartir la lista semanal usando la función de compartir del teléfono.
- Responsive y sin dependencias externas.
- Progressive Web App: después de la primera visita puede conservar recursos básicos para uso sin conexión.
- No recopila nombres, correos ni información personal.

## Publicar gratis con GitHub Pages

1. Crea un repositorio **público** llamado `menu-misional-leon-creek`.
2. Sube todos los archivos de este paquete a la raíz del repositorio.
3. En GitHub abre **Settings → Pages**.
4. En **Build and deployment → Source**, escoge **Deploy from a branch**.
5. Selecciona la rama **main** y la carpeta **/(root)**.
6. Pulsa **Save**.
7. El sitio quedará en:

   `https://raysuarezg-stack.github.io/menu-misional-leon-creek/`

## Actualizar el contenido

Las actividades están en `app.js`, dentro de `const TASKS = [...]`.

Cada actividad sigue este formato:

```js
T('Texto de la actividad', ['jovenes','mujeres'], 'invitar', 2, 10)
```

- Primer campo: texto.
- Segundo: grupos a los que aplica.
- Tercero: categoría.
- Cuarto: dificultad `1`, `2` o `3`.
- Quinto: minutos aproximados.

## Privacidad

La selección “Mi semana” se guarda únicamente en `localStorage` del navegador del visitante. No hay base de datos ni cuentas.
