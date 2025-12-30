# Proyecto Administrador de Productos FRONT

- **_npm i create vite@latest_**

## Herramientas y/o Tecnologías

- Vite
- React
- TypeScript
- TailwindCSS
  - **_npm i tailwindcss @tailwindcss/vite_**
  - En el archivo de: **vite.config.ts**, agregamos e importamos _TAILWINDCSS_:
  - ```
    import tailwindcss from '@tailwindcss/vite';

    // https://vite.dev/config/
    export default defineConfig({
      plugins: [react(), tailwindcss()],
    })
  ```
- 