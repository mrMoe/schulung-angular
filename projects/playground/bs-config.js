 
module.exports = {
  injectChanges: true, // workaround for Angular 2 styleUrls loading
  files: ['./**/*.{html,htm,css,js}'],
  server: {
    baseDir: './',
    middleware: {      
      0: null     // removes default `connect-logger` middleware
    }
  }
};
