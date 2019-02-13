var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');
var collections = require('metalsmith-collections');
var serve = require('metalsmith-serve');
var sass = require('metalsmith-sass');
var browserSync = require('metalsmith-browser-sync');

let monitor = () => {
  return (files, metalsmith, done) => {
    // console.log(metalsmith._metadata);
    done();
  };
};

Metalsmith(__dirname)
  .metadata({
    site: {
      name: 'handbuch-programmieren.de',
      description:
        'Ein lebensnahes Handbuch für Programmierer und solche die es werden wollen.',
      url: 'https://handbuch-programmieren.de/',
    },
  })
  .source('./src')
  .destination('./docs')
  .use(
    collections({
      articles: {
        pattern: 'a/**/*.md',
        sortBy: 'chapter',
      },
    }),
  )
  .use(
    sass({
      file: 'css/styles.css',
      outputDir: 'css/',
      outputStyle: 'expanded',
      sourceMap: true,
      sourceMapContents: true,
    }),
  )
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(
    layouts({
      directory: 'templates',
      engine: 'handlebars',
      partials: {
        head: 'partials/head',
        header: 'partials/header',
        sidebar: 'partials/sidebar',
      },
    }),
  )
  .use(monitor())
  .use(
    serve({
      port: 8081,
      verbose: true,
    }),
  )
  .use(
    browserSync({
      server: 'docs',
      files: ['src/**/*.*'],
    }),
  )
  .build(function(err, files) {
    if (err) {
      throw err;
    }
  });
