import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Tu configuración de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCCEwqQZMFwiZ7d4y854JGY5lN2f09YtDg",
    authDomain: "fb-restaurante-kd.firebaseapp.com",
    projectId: "fb-restaurante-kd",
    storageBucket: "fb-restaurante-kd.appspot.com",
    messagingSenderId: "186522045162",
    appId: "1:186522045162:web:8828ff728b80af6584a593"
  };

// Inicializa la aplicación Firebase
const app = initializeApp(firebaseConfig);

// Obtiene la instancia de Firestore
const db = getFirestore(app);

export default db;
