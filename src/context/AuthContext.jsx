import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut } from 'firebase/auth';


const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
}

// authprovider
export const  AuthProvide = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register a user
  const registerUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
      
  }

  const googleProvider = new GoogleAuthProvider();

  // login the user
  const loginUser = async(email, password) =>{
    return await signInWithEmailAndPassword(auth, email, password);
  }

  // signin with google
  const signInWithGoogle = async() =>{
      return await signInWithPopup(auth, googleProvider)
  }

  // logout
  const logout = async() => {
    return signOut(auth);
  }

  // manage user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
      setCurrentUser(user);
      setLoading(false);

      if (user) {
        const {email, displayName, photoURL} = user;
        const userData = {
          email, username: displayName, photo : photoURL
        }
      }
    })
    return () => unsubscribe();
  }, []);

  const value ={
    currentUser,
    loading,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout
  } 

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}