process.env.ROLLUP_NO_BINARY_INSTALL = '1';

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import tailwindcss from 'vite-plugin-tailwindcss'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // tailwindcss(),
    react()
  ],
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   plugins: [react()],
//   css: {
//     postcss: './postcss.config.js'
//   }
// })
