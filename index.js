var Metalsmith = require('metalsmith');
var markdown = require('metalsmith-markdown');
var layouts = require('metalsmith-layouts');
var permalinks = require('metalsmith-permalinks');

Metalsmith(__dirname)
  .metadata({
    title: 'handbuch-programmieren.de',
    description:
      'Ein lebensnahes Handbuch für Programmierer und solche die es werden wollen.',
    generator: 'Metalsmith',
    url: 'https://handbuch-programmieren.de/',
  })
  .source('./src')
  .destination('./build')
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(
    layouts({
      engine: 'handlebars',
    })
  )
  .build(function(err, files) {
    if (err) {
      throw err;
    }
  });
