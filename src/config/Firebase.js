import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCtJe39wd4uqfkTQzCls4_f74JNyqDSS0Y',
    authDomain: 'szumi-music.firebaseapp.com',
    databaseURL: 'https://szumi-music.firebaseio.com',
    projectId: 'szumi-music',
    storageBucket: 'szumi-music.appspot.com',
    messagingSenderId: '1020338506597',
    appId: '1:1020338506597:web:d724f2f2d527e1428d6f8c',
};

const fire = firebase.initializeApp(config);
const storage = firebase.storage();

export { fire as default, storage };
