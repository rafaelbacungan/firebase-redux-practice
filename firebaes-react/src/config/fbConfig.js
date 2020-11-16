import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyAucedrjL84dkmgbT10SqmJHqmB5njWRME",
    authDomain: "firebaes-react.firebaseapp.com",
    databaseURL: "https://firebaes-react.firebaseio.com",
    projectId: "firebaes-react",
    storageBucket: "firebaes-react.appspot.com",
    messagingSenderId: "113166226159",
    appId: "1:113166226159:web:ba6bcdd7e1e17beda9c11a",
    measurementId: "G-VELHX4R016"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;