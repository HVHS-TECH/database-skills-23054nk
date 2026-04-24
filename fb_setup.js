/**************************************************************/
// fb_initialise()
// Initialize firebase, connect to the Firebase project.
// 
// Find the config data in the Firebase console. Cog wheel > Project Settings > General > Your Apps > SDK setup and configuration > Config
//
// Input:  n/a
// Return: n/a
/**************************************************************/
  const firebaseConfig = {
  apiKey: "AIzaSyDPKeaEAGuySZZ9x7R_10NmJuwEM4GTGL8",
  authDomain: "nityaa-kansara-12comp.firebaseapp.com",
  databaseURL: "https://nityaa-kansara-12comp-default-rtdb.firebaseio.com",
  projectId: "nityaa-kansara-12comp",
  storageBucket: "nityaa-kansara-12comp.firebasestorage.app",
  messagingSenderId: "624311963857",
  appId: "1:624311963857:web:3aca030c6efa831bd2f5f0",
  measurementId: "G-L3QV0PLWNW"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // This log prints the firebase object to the console to show that it is working.
  // As soon as you have the script working, delete this log.
  console.log("Firebase initialize finished:");
  console.log(firebase);
