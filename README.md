# StudyQuiz

Aplicación PWA personal para estudiar con exámenes tipo test de años anteriores.

## Estructura del proyecto

```
prueba-app/
├── Preguntas/          ← Archivos Markdown con las preguntas de cada asignatura
├── Soluciones/         ← Archivos Markdown con las respuestas correctas
├── scripts/            ← Scripts de procesamiento (parse-questions.js)
├── src/                ← Código fuente de la aplicación
│   ├── data/
│   │   └── questions.json   ← Generado automáticamente, NO editar manualmente
│   ├── css/
│   └── js/
└── package.json
```

---

## Corregir una errata en preguntas o soluciones

1. Edita el archivo correspondiente en `Preguntas/` o `Soluciones/`
2. Regenera el JSON ejecutando en la terminal:

```bash
npm run parse
```

3. Si tienes el servidor de desarrollo activo, haz **F5** en el navegador para recargar.

> ⚠️ **Importante:** No edites `src/data/questions.json` directamente, ya que se sobreescribe cada vez que ejecutas `npm run parse` o `npm run dev`.

---

## Levantar el proyecto en local

### Primera vez (instalar dependencias)

```bash
npm install
```

### Arrancar el servidor de desarrollo

```bash
npm run dev
```

Abre el navegador en **http://localhost:5173/**

Para acceder desde el móvil (misma red WiFi), usa la URL `Network` que aparece en la terminal (ej. `http://192.168.1.x:5173/`).

---

## Añadir una nueva asignatura

1. Crea `Preguntas/XXXX_Preguntas.md` con el formato:

```markdown
# Preguntas de los exámenes

## Asignatura "Nombre de la Asignatura"

### Nombre del Examen

1. Texto de la pregunta
- A. Opción A
- B. Opción B
- C. Opción C
```

2. Crea `Soluciones/XXXX_Soluciones.md` con el formato:

```markdown
# Soluciones de los exámenes

## Asignatura "Nombre de la Asignatura"

### Nombre del Examen

1. A
2. C
3. B
```

3. Ejecuta `npm run dev` — el parser detectará los nuevos archivos automáticamente.

---

## Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Parsea preguntas + arranca servidor de desarrollo |
| `npm run build` | Parsea preguntas + genera build de producción |
| `npm run parse` | Solo regenera `questions.json` sin arrancar el servidor |
| `npm run preview` | Previsualiza el build de producción |
