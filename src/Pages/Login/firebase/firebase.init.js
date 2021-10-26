import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initailizeAuthentication = () => {
    return initializeApp(firebaseConfig);
}

export default initailizeAuthentication