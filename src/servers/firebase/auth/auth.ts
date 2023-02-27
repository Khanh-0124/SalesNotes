import auth from '@react-native-firebase/auth';
import { useCallback, useMemo } from 'react';

interface InputLoginType {
  email: string;
  password: string;
}
// Login
const handleLogin = (email: string, password: string) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
    });
};

// SingUp
const handleSignup = (email: string, password: string) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
    });
};

// Logout


const handleSingout = () => {
  auth()
    .signOut()
}

export { handleSignup, handleLogin, handleSingout };
