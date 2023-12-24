// Ejemplo de configuración de alias en rollup.config.js
import resolve from "rollup-plugin-node-resolve";

export default {
  // ... otras configuraciones ...
  plugins: [
    resolve({
      alias: {
        "./amplifyconfiguration.json":
          "ruta/absoluta/a/amplifyconfiguration.json",
      },
    }),
    // ... otros plugins ...
  ],
};
