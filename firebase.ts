// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8uUtdYPhSsidOlDnMgKZ1UP_Z4sagd7w",
  authDomain: "netflix-clone-yt-d5385.firebaseapp.com",
  projectId: "netflix-clone-yt-d5385",
  storageBucket: "netflix-clone-yt-d5385.appspot.com",
  messagingSenderId: "683487020554",
  appId: "1:683487020554:web:ae48780f1cf5a756f341f3"
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }