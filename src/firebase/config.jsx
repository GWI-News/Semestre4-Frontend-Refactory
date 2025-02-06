import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth } from "firebase/auth"

let firebaseConfig = {}
const environment = window.location.hostname

if (environment.includes('e715f')) {
    firebaseConfig = {
        apiKey: import.meta.env.REACT_APP_PROD_API_KEY,
        authDomain: import.meta.env.REACT_APP_PROD_AUTH_DOMAIN,
        projectId: import.meta.env.REACT_APP_PROD_PROJECT_ID,
        storageBucket: import.meta.env.REACT_APP_PROD_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.REACT_APP_PROD_MESSAGING_SENDER_ID,
        appId: import.meta.env.REACT_APP_PROD_APP_ID,
        measurementId: import.meta.env.REACT_APP_PROD_MEASUREMENT_ID
    }
} else if (environment.includes('test')) {
    firebaseConfig = {
        apiKey: import.meta.env.REACT_APP_TEST_API_KEY,
        authDomain: import.meta.env.REACT_APP_TEST_AUTH_DOMAIN,
        databaseUrl: import.meta.env.REACT_APP_TEST_DATABASE_URL,
        projectId: import.meta.env.REACT_APP_TEST_PROJECT_ID,
        storageBucket: import.meta.env.REACT_APP_TEST_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.REACT_APP_TEST_MESSAGING_SENDER_ID,
        appId: import.meta.env.REACT_APP_TEST_APP_ID,
        measurementId: import.meta.env.REACT_APP_TEST_MEASUREMENT_ID
    }
} else {
    firebaseConfig = {
        apiKey: import.meta.env.REACT_APP_DEV_API_KEY,
        authDomain: import.meta.env.REACT_APP_DEV_AUTH_DOMAIN,
        projectId: import.meta.env.REACT_APP_DEV_PROJECT_ID,
        storageBucket: import.meta.env.REACT_APP_DEV_STORAGE_BUCKET,
        messagingSenderId: import.meta.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
        appId: import.meta.env.REACT_APP_DEV_APP_ID,
        measurementId: import.meta.env.REACT_APP_DEV_MEASUREMENT_ID
    }
}

const app = initializeApp(firebaseConfig)
export const analytics = getAnalytics(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)