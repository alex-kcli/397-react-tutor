// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { useEffect, useState } from 'react';
import { getDatabase, onValue, ref, update} from 'firebase/database';
import { useCallback } from "react";


const firebaseConfig = {
  apiKey: "AIzaSyCVidYuyc2wzTGWzBW0IKFH3uItfcUUsSU",
  authDomain: "react-tutorial-3ba1d.firebaseapp.com",
  databaseURL: "https://react-tutorial-3ba1d-default-rtdb.firebaseio.com",
  projectId: "react-tutorial-3ba1d",
  storageBucket: "react-tutorial-3ba1d.appspot.com",
  messagingSenderId: "370997928185",
  appId: "1:370997928185:web:be9219a75999feb7064228",
  measurementId: "G-GS9N8PLJBJ"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const database = getDatabase(firebase);

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(() => (
    onValue(ref(database, path), (snapshot) => {
     setData( snapshot.val() );
    }, (error) => {
      setError(error);
    })
  ), [ path ]);

  return [ data, error ];
};

const makeResult = (error) => {
  const timestamp = Date.now();
  const message = error?.message || `Updated: ${new Date(timestamp).toLocaleString()}`;
  return { timestamp, error, message };
};

export const useDbUpdate = (path) => {
  const [result, setResult] = useState();
  const updateData = useCallback((value) => {
    update(ref(database, path), value)
    .then(() => setResult(makeResult()))
    .catch((error) => setResult(makeResult(error)))
  }, [database, path]);

  return [updateData, result];
};