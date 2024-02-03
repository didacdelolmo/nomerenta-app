import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: {
  //   alias: [
  //     {
  //       find: /^(.*)\.js$/,
  //       replacement: '$1',
  //     },
  //   ],
  // },
  plugins: [react()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
});
