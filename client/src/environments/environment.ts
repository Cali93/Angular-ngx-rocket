// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  version: '(dev)',
  serverUrl: '/api',
  defaultLanguage: 'en-US',
  supportedLanguages: [
    'en-US',
    'fr-FR'
  ],
  firebase: {
    apiKey: 'AIzaSyDmaQtnzCMBx35cNu8lIJMIBIzovxU4MmY',
    authDomain: 'beesquad-da9cc.firebaseapp.com',
    databaseURL: 'https://beesquad-da9cc.firebaseio.com',
    projectId: 'beesquad-da9cc',
    storageBucket: 'beesquad-da9cc.appspot.com',
    messagingSenderId: '1092125124082'
  }
};
