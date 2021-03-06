// `.env.ts` is generated by the `npm run env` command
import env from './.env';

export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'https://api.chucknorris.io',
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
