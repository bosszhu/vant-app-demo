import { createVuePlugin } from 'vite-plugin-vue2'

export default {
  plugins: [createVuePlugin()],
  server: {
    proxy: {
      '/api': 'http://localhost:3000'
    }
  }
}