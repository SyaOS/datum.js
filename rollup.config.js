import babel from 'rollup-plugin-babel'
import npm from 'rollup-plugin-npm'
import commonjs from 'rollup-plugin-commonjs'

export default {
    entry: 'src/index.js',
    dest: 'index.js',
    format: 'umd',
    plugins: [
        babel(),
        npm({
            jsnext: true,
            main: true
        }),
        commonjs({
            include: 'node_modules/**'
        })
    ]
};
