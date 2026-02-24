import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Giữ bản này để chạy được React Compiler
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']] // Giữ cái này để app chạy siêu mượt
      }
    })
  ],
  server: {
    port: 3000 // Cố định port 3000 cho cả nhóm dùng chung
  },
  css: {
    devSourcemap: true // Giúp ông soi lỗi CSS dễ hơn khi code
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src') // Giúp ông import kiểu '~/components/...' cực gọn
    }
  }
})
