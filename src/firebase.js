const firebase = require('firebase')

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyAI5NE4fx7WAz0egxyZI18z_8NqoR7Dvf8',
  authDomain: 'delivery-bot-fe36a.firebaseapp.com',
  projectId: 'delivery-bot-fe36a',
  storageBucket: 'delivery-bot-fe36a.appspot.com',
  messagingSenderId: '610900626070',
  appId: '1:610900626070:web:598b3720575028851990b7'
})

exports.dataBase = firebase.firestore()

exports.firebaseConfig = firebaseConfig
