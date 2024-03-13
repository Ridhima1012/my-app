// import { initializeApp } from "firebase/app";
// import {getAuth, GoogleAuthProvider,signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
// import {getFirestore, doc, addDoc, getDoc, setDoc} from 'firebase/firestore'
// import {  collection, writeBatch } from 'firebase/firestore';
// import { ref, uploadBytesResumable } from 'firebase/storage';
// import { getStorage } from 'firebase/storage';
    
// const firebaseConfig = {
//     apiKey: "AIzaSyAowUxwx2xW_rbOFiVsmFYuM844BNkuIHE ",
//     authDomain: "sit-313-task.firebaseapp.com",
//     projectId: "sit-313-task",
//     storageBucket: "sit-313-task.appspot.com",
//     messagingSenderId: "428916116134",
//     appId: "1:428916116134:web:dd1d4f477823b5ce584267"
//   };
//   const firebaseapp = initializeApp(firebaseConfig);
//   const provider= new GoogleAuthProvider();
 
//   provider.setCustomParameters({
//   prompt:"select_account"
// });
  

//   export const auth=getAuth();
//   export const signInWithGooglePopup =()=> signInWithPopup(auth,provider)
//   export const db =getFirestore();
//   const storage = getStorage(firebaseapp);
//   export const createuserdocfromAuth = async(userAuth, additionalInformation ={}) =>

// {
//   if(!userAuth.email) return;

//   const userDocRef=doc (db, 'users', userAuth.uid);
//   console.log(userDocRef)


// const userSnapShots = await getDoc(userDocRef);
// console.log(userSnapShots)
// console.log(userSnapShots.exists())

// if(!userSnapShots.exists())
// {
//    const {displayName, email} =userAuth
//    const createdAt = new Date();
//    try{
//     await setDoc(userDocRef,{
//    displayName,
//    email,
//    createdAt,
//    ...additionalInformation
//     })
//   }
//     catch(error){
//     console.log('error in creating', error.message)
//     }

//    }
//    return userDocRef;
// }

// export async function createAuthUserWithEmailAndPassword (email,password)
// { 
//   if(!email || !password) 
//   return
//   return await createUserWithEmailAndPassword(auth,email,password)
// }

// export async function signinAuthUserWithEmailAndPassword (email,password)
// { 
//   if(!email || !password) 
//   return
//   return await signInWithEmailAndPassword(auth,email,password)
// }

// export async function addCollectionandDocuments(collectionKey, objectsToAdd) {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);

//   objectsToAdd.forEach((object) => {
//     const docRef = doc(collectionRef);
//     batch.set(docRef, object);
//   });

//   await batch.commit();
// }

// export const ImageStore = (image) => {
//   console.log("start");
//   if (image == null) return;

//   const storageRef = ref(storage, `images/${image.name}`);

//  const data=uploadBytesResumable(storageRef, image).then(() => {
//     console.log("Image uploaded");
//     console.log(data);
//     alert("Image uploaded");


//   }).catch((error) => {
//     console.error('Error in upload:', error);
//     alert('Error!!!!  Try again.');
//   });
// };

// export const addCollectionandDocuments = async (collectionKey, objectsToAdd) => {
//   const collectionRef = collection(db, collectionKey);

//   objectsToAdd.forEach(async (object) => {
//     await addDoc(collectionRef, object);
//   });
// };


import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, doc, addDoc, getDocs, getDoc, setDoc } from 'firebase/firestore';
import { collection, writeBatch } from 'firebase/firestore';
import { ref, uploadBytesResumable } from 'firebase/storage';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAowUxwx2xW_rbOFiVsmFYuM844BNkuIHE ",
    authDomain: "sit-313-task.firebaseapp.com",
    projectId: "sit-313-task",
    storageBucket: "sit-313-task.appspot.com",
    messagingSenderId: "428916116134",
    appId: "1:428916116134:web:dd1d4f477823b5ce584267"
  };

const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
const storage = getStorage(firebaseApp);

export const fetchData = async () => {
  const collectionRef = collection(db, 'questions');
  const querySnapshot = await getDocs(collectionRef);
  return querySnapshot.docs.map((doc) => doc.data());
  // console.log(dataArray); // This will print your data array.
  // return dataArray;
};


export const createuserdocfromAuth = async (userAuth, additionalInformation = {}) => {
  if (!userAuth.email) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapShots = await getDoc(userDocRef);

  if (!userSnapShots.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error in creating', error.message);
    }
  }
  return userDocRef;
};

export async function createAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password)
    return;
  return await createUserWithEmailAndPassword(auth, email, password);
}

export async function signinAuthUserWithEmailAndPassword(email, password) {
  if (!email || !password)
    return;
  return await signInWithEmailAndPassword(auth, email, password);
}

export async function addCollectionandDocuments(collectionKey, objectsToAdd) {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef);
    batch.set(docRef, object);
  });

  await batch.commit();
}

export const ImageStore = (image) => {
  console.log("start");
  if (image == null) return;

  const storageRef = ref(storage, `images/${image.name}`);

  const data = uploadBytesResumable(storageRef, image).then(() => {
    console.log("Image uploaded");
    console.log(data);
    alert("Image uploaded");
  }).catch((error) => {
    console.error('Error in upload:', error);
    alert('Error!!!! Try again.');
  });
};
