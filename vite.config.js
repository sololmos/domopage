import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

})




// export default {
//   root: resolve(__dirname, 'src'),
//   build: {
//     outDir: '../dist'
//   },
//   server: {
//     port: 8080
//   }
// }