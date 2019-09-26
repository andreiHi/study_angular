const webpack = require('webpack');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rxPaths = require('rxjs/_esm5/path-mapping');
const utils = require('./utils.js');
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = (options) => ({
    resolve: {
        extensions: ['.ts', '.js'],
        modules: ['node_modules'],
        alias: {
            app: utils.root('src/app/'),
            ...rxPaths()
        }
    },
    stats: {
        children: false
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
                options: {
                    minimize: true,
                    caseSensitive: true,
                    removeAttributeQuotes:false,
                    minifyJS:false,
                    minifyCSS:false
                },
                exclude: /(src\/index.html)/
            },
            {
                test: /\.(jpe?g|png|gif|svg|woff2?|ttf|eot)$/i,
                loader: 'file-loader',
                options: {
                    digest: 'hex',
                    hash: 'sha512',
                    name: 'content/[hash].[ext]'
                }
            },
            {
                test: /manifest.webapp$/,
                loader: 'file-loader',
                options: {
                    name: 'manifest.webapp'
                }
            },
            // Ignore warnings about System.import in Angular
            { test: /[\/\\]@angular[\/\\].+\.js$/, parser: { system: true } },
            {
                test: /bootstrap\/dist\/js\/umd\//,
                loader: 'imports?jQuery=jquery'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: `'${options.env}'`,
                BUILD_TIMESTAMP: `'${new Date().getTime()}'`,
                // APP_VERSION is passed as an environment variable from the Gradle / Maven build tasks.
                VERSION: `'${process.env.hasOwnProperty('APP_VERSION') ? process.env.APP_VERSION : 'UNKNOWN'}'`,
                DEBUG_INFO_ENABLED: options.env === 'development',
                // The root URL for API calls, ending with a '/' - for example: `"https://www.jhipster.tech:8081/myservice/"`.
                // If this URL is left empty (""), then it will be relative to the current context.
                // If you use an API server, in `prod` mode, you will need to enable CORS
                // (see the `jhipster.cors` common JHipster property in the `application-*.yml` configurations)
                SERVER_API_URL: `'http://localhost:8080'`
            }
        }),
        new CopyWebpackPlugin([
            // { from: './node_modules/swagger-ui/dist/css', to: 'swagger-ui/dist/css' },
            // { from: './node_modules/swagger-ui/dist/lib', to: 'swagger-ui/dist/lib' },
            // { from: './node_modules/swagger-ui/dist/swagger-ui.min.js', to: 'swagger-ui/dist/swagger-ui.min.js' },
            // { from: './src/main/webapp/swagger-ui/', to: 'swagger-ui' },
            // { from: './src/main/webapp/content/', to: 'content' },
             { from: './src/favicon.ico', to: 'favicon.ico' },
            { from: './manifest.webapp', to: 'manifest.webapp' },
            { from: './robots.txt', to: 'robots.txt' }
        ]),
        new HtmlWebpackPlugin({
            favicon: './src/assets/favicon.ico',
            template: './src/index.html',
            chunks: ['polyfills', 'main', 'global'],
            chunksSortMode: 'manual',
            inject: 'body'
        }),
        new BaseHrefWebpackPlugin({ baseHref: '/' }),
        new HtmlWebpackExternalsPlugin({
            externals: [
                {
                    module: 'jquery',
                    entry: 'dist/jquery.min.js',
                    global: 'jQuery',
                },
                {
                    module: 'popper.js',
                    entry: 'dist/umd/popper.min.js',
                    global: 'popper',
                },
                {
                    module: 'bootstrap',
                    entry: 'dist/js/bootstrap.min.js',
                    global: 'bootstrap',
                }
            ],
        })
    ]
});
