import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
   
    plugins: [plugin()],
    base: "/react_project/",
    server: {
        port: 64431,
    }
})