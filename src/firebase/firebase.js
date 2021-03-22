import firebase from 'firebase/app'
import 'firebase'

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_API_ID,
}
firebase.initializeApp(firebaseConfig)

const database = firebase.database()

export { firebase, database as default }

// database.ref().set({
//     name: 'Abdul karim Y.',
//     age: 37,
//     isSingle: false,
//     location: {
//         city: 'beirut'
//     },
//     gender: 'm',
//     attributes: {
//         height: 178,
//         weight: 85
//     }
// });
// // database.ref('location/city').set('Odense');
// // database.ref('attributes').set({
// //     height: 178,
// //     weight: 84
// // }).then(() => {
// //     console.log('Data attributes has been saved successfully.');
// // }).catch((e) => {
// //     console.log('Error: data has not been saved!!');
// // })
// database.ref().update({
//     isSingle: null,
//     'location/city': 'Odense',
//     'attributes.weight': 84
// }).then(() => {
//     console.log('update has been Successful')
// }).catch((e) => {
//     console.log('Error in update', e);
// });
