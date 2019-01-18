import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//Initialize Firebase
var config = {
  apiKey: 'AIzaSyCgHmf_aPUGwAV9qRhkuC6QSiLOEkSJI2c',
  authDomain: 'react-projectplan-demo.firebaseapp.com',
  databaseURL: 'https://react-projectplan-demo.firebaseio.com',
  projectId: 'react-projectplan-demo',
  storageBucket: 'react-projectplan-demo.appspot.com',
  messagingSenderId: '1079216937173'
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
