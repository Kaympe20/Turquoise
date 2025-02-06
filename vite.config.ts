import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import discardUnused from 'postcss-discard-unused';
import cssnano from 'cssnano';
import colormin from 'postcss-colormin';
import discardDuplicates from 'postcss-discard-duplicates';

export default defineConfig({
    plugins: [
        tailwindcss(),
    ],
    base: '/Turquoise/',
    css: {
        postcss: {
            plugins: [
                cssnano({
                    plugins: [
                        discardUnused,
                        colormin,
                        discardDuplicates
                    ]
                })
            ]
        }
    }
})