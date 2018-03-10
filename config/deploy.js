/* eslint-env node */
'use strict';

module.exports = function(deployTarget) {
  let ENV = {
    build: {},
    'ssh-index': {
      username: 'root',
      host: 'dock.semte.ch',
      remoteDir: '/data/lblod/lblod-docs/app',
      agent: process.env.SSH_AUTH_SOCK,
      port: 2275,
      allowOverwrite: true
    },
    'rsync': {
      dest: '/data/lblod/lblod-docs/app',
      username: 'root',
      host: 'dock.semte.ch',
      port: 2275,
      delete: false,
      privateKey: process.env.SSH_AUTH_SOCK,
      arg:['--verbose']
    }
  };


  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
