import * as firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyArHeVmNUbJFrP_y9glzXQ0aWdcPdVUh4M',
  authDomain: 'fly-shop-95bb2.firebaseapp.com',
  databaseURL: 'https://fly-shop-95bb2.firebaseio.com',
  projectId: 'fly-shop-95bb2',
  storageBucket: 'fly-shop-95bb2.appspot.com',
  messagingSenderId: '683522890408'
};

firebase.initializeApp(config);

export default firebase;

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
