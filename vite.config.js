import { defineConfig, splitVendorChunkPlugin } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        chunkSplitPlugin({
            strategy: 'unbundle',
            customSplitting: {
                // All files in `src/container` will be merged together in `container` chunk
                composables: [/src\/composables/],
                components: [/src\/components/],
                models: [/src\/models/],
                pages: [/src\/pages/],
                i18n: [/src\/i18n/],
            },
        }),
        splitVendorChunkPlugin(),
    ],
    server: {
        host: 'tplui.test',
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
