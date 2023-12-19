import vue from 'rollup-plugin-vue';

export default {
    input: 'dist/index.js',
    output: {
        file: 'dist/bundle.js',
        format: 'es'
    },
    plugins: [
        vue()
    ]
};
