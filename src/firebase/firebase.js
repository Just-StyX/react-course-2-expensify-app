import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, remove, update, onValue, off, push, onChildRemoved, onChildChanged, onChildAdded } from 'firebase/database'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

initializeApp(firebaseConfig);

const database = getDatabase();

export { database as default }


// const reference = ref(db, 'expenses')
// onChildRemoved(reference, (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// onChildChanged(reference, (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// onChildAdded(reference, (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })
// onValue(reference, (snapshot) => {
//     const expenses = []

//     snapshot.forEach((child) => {
//         expenses.push({
//             id: child.key,
//             ...child.val()
//         })
//     })

//     console.log((expenses))
// })

//  push(reference, {
//      description: 'Rent',
//      amount: 100,
//      note: '',
//      createdAt: 1000
//  })
// push(reference, {
//     description: 'Car',
//     amount: 10005,
//     note: 'Home',
//     createdAt: 1000
// })
// push(reference, {
//     description: 'Food',
//     amount: 120,
//     note: 'pizza',
//     createdAt: 1000
// })
// push(reference, {
//     description: 'Gift',
//     amount: 10,
//     note: '',
//     createdAt: 1000
// })