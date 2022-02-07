import { getAuth, onAuthStateChanged, signInWithPopup, signOut}  from 'firebase/auth';
import { googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
    type: 'LOGIN',
    uid
})

export const startLogin = () => {
    return () => {
        const auth = getAuth()
        signInWithPopup(auth, googleAuthProvider).then(() => { window.location.href = '/dashboard'; })
    }   
}

export const logout = () => ({
    type: 'LOGOUT'
})

export const startLogOut = () => {
    return () => {
        const auth = getAuth()
        signOut(auth).then(() => { window.location = window.location.origin; })
        
    }
}