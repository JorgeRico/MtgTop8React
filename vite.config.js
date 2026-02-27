import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

export default defineConfig({
    plugins: [
        react(),
        vitePrerenderPlugin({
            renderTarget: '#app',
        }),
        viteTsconfigPaths(),
        svgr({
            include: '**/*.svg?react',
        }),
    ],
    resolve: {
        alias: {
            src: "/src",
        },
    },
    server: {    
        // this ensures that the browser opens upon server start
        open: true,
        // this sets a default port to 3005
        port: 3005,
    },        
    esbuild: {
        include: /\.[jt]sx?$/,
        exclude: [],
        loader: 'jsx',
    },
    build: {
        sourcemap: false,
        chunkSizeWarningLimit: 10000,
        rollupOptions: {
            plugins: [],
        }
    },
});
