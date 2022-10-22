require('dotenv').config();
const _package = require('./package.json');

import { defineConfig } from "vite";
import EnvironmentPlugin from 'vite-plugin-environment';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, './src/assets'),
            '@components': path.resolve(__dirname, './src/components'),
            '@contexts': path.resolve(__dirname, './src/contexts'),
            '@hooks': path.resolve(__dirname, './src/hooks'),
            '@models': path.resolve(__dirname, './src/models'),
            '@root': path.resolve(__dirname, './src/root'),
            '@services': path.resolve(__dirname, './src/services'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@utils': path.resolve(__dirname, './src/utils'),
            '@views': path.resolve(__dirname, './src/views'),
        }
    },
    plugins: [
        react(),
        svgr({
            exportAsDefault: true,
        }),
        EnvironmentPlugin({
            VERSION: JSON.stringify(_package.version),
        }),
    ],
})
