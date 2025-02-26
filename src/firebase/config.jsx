import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

let firebaseConfig = {}
const environment = window.location.hostname

if (environment.includes('gwi-news')) {
    firebaseConfig = JSON.parse(import.meta.env.VITE_PROD_ENVIRONMENT_API_KEYS);
} else if (environment.includes('test')) {
    firebaseConfig = JSON.parse(import.meta.env.VITE_TEST_ENVIRONMENT_API_KEYS);
} else {
    firebaseConfig = JSON.parse(import.meta.env.VITE_DEV_ENVIRONMENT_API_KEYS);
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)