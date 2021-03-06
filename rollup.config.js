// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import asyncHelper from 'rollup-plugin-async';

export default {
    entry: 'src/www/js/app.js',
    format: 'cjs',
    plugins: [
        resolve(),
        asyncHelper(),
        babel({
            exclude: 'node_modules/**'
        }),
        commonjs({
            include: 'node_modules/**',
            extensions: [ '.js' ],
            ignoreGlobal: false,
            sourceMap: true,
        })        
    ],
    dest: 'dist/www/js/bundle.js',
    sourceMap: true,
};