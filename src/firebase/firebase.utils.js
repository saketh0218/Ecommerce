import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyBI1h7UdeZU3KOZDNSH11nLmKP9fI0I3XY",
  authDomain: "e-commerce-react-app-7747e.firebaseapp.com",
  projectId: "e-commerce-react-app-7747e",
  storageBucket: "e-commerce-react-app-7747e.appspot.com",
  messagingSenderId: "298926063263",
  appId: "1:298926063263:web:6b0d556b42be6d0b702caa",
  measurementId: "G-VEYE7D2D9L",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, data) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  data.forEach(obj => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collection => {
  const transformedCollection = collection.docs.map(doc => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, item) => {
    acc[item.title.toLowerCase()] = item;
    return acc;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();

export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
