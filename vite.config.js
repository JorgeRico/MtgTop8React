import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';
import { vitePrerenderPlugin } from 'vite-prerender-plugin';

export default defineConfig({
    plugins: [
        react(),
        vitePrerenderPlugin({
            renderTarget: '#root',
        }) 
        // TODO: remove when fixed: https://github.com/preactjs/vite-prerender-plugin/issues/3
        .concat({
            name: 'vite-prerender-plugin-react-exit',
            apply: 'build',
            closeBundle() {
                setTimeout(() => {
                this.warn(
                    '[vite-prerender-plugin-react-exit] calling process.exit(0) to finish prerender (see: https://github.com/preactjs/vite-prerender-plugin/issues/3)',
                )
                this.warn(
                    '[vite-prerender-plugin-react-exit] if build failed and you see no error, comment process.exit line',
                )
                process.exit(0) // comment this line to debug errors
                }, 5000).unref()
            },
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
