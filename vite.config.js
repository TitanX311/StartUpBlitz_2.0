import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
          input: {
            main: './index.html',  // Your main page
            signin: './signin.html', // Added login page
          },
        },
      }
})