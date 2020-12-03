import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyCCyYhqnIcWtHBjd1ejZftOG-ZjLMu2iuI",
  authDomain: "student-attendance-app-c559a.firebaseapp.com",
  databaseURL: "https://student-attendance-app-c559a.firebaseio.com",
  projectId: "student-attendance-app-c559a",
  storageBucket: "student-attendance-app-c559a.appspot.com",
  messagingSenderId: "558713555090",
  appId: "1:558713555090:web:b67d8d7b1ed5f96cde3e4b"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase.database();
