import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDgSemVyxE4L9MjZPHpL-zBIYu__dWw1s4",
    authDomain: "snapshopper-4cbb4.firebaseapp.com",
    databaseURL: "https://snapshopper-4cbb4.firebaseio.com",
    projectId: "snapshopper-4cbb4",
    storageBucket: "snapshopper-4cbb4.appspot.com",
    messagingSenderId: "460830477176",
    appId: "1:460830477176:web:4af433240e6eaaf4"
};

app.initializeApp(config);

export default app;