const firebaseConfig = {
    apiKey: "AIzaSyAeCwkVcN1lVkYFgpyMGdy9NfdJC-vzDzg",
    authDomain: "vaca-app-16d28.firebaseapp.com",
    projectId: "vaca-app-16d28",
    storageBucket: "vaca-app-16d28.appspot.com",
    messagingSenderId: "724224960933",
    appId: "1:724224960933:web:6b9b3722ba352a57fba04c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage(); // Inicializa el servicio de almacenamiento
