// Firebase configuration
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig =({
    apiKey: "AIzaSyCy23EhJQHsPPIMiwZc-IdkeoXDJ4QxFlw",
    authDomain: "auth-crud-app-4e421.firebaseapp.com",
    projectId: "auth-crud-app-4e421",
    storageBucket: "auth-crud-app-4e421.appspot.com",
    messagingSenderId: "673086023828",
    appId: "1:673086023828:web:128a4e7f60fbe6583cac81"
})
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app
