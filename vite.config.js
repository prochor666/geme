import { defineConfig, splitVendorChunkPlugin } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue(), splitVendorChunkPlugin()],
    server: {
        host: 'geme.test',
        port: 3000,
    },
    build: {
        extend(config) {
            config.module.rules.push({
                test: /\.worker\.js$/,
                use: { loader: 'worker-loader' },
            });
        },
    },
});
