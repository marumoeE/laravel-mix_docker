const mix = require('laravel-mix');
require('laravel-mix-ejs')
const tailwindcss = require('tailwindcss');

mix.setResourceRoot('');
mix
    .js('resources/js/app.js', 'public/js/')
    .sass('resources/sass/app.scss', 'public/css/')
    .options({
        processCssUrls: false,
        postCss: [ tailwindcss('./tailwind.config.js') ],
    })
    .ejs(
        'resources/views',
        'public',
        { env: process.env.NODE_ENV },
        { base: 'resources/views' }
    )
    .browserSync({
        files: './**/*',
        server: './public/',
        proxy: false,
        open: false,
        reloadOnRestart: true
    })
    .autoload({
        'jquery': ['$', 'window.jQuery']
    });