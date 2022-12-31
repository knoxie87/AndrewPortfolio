// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { Observer } from "@firebase/util";
import { ref, getDownloadURL, uploadBytes, listAll } from "firebase/storage";
import React from 'react'

import "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGlwKgIIWOU3YcshRrTXzNtLntr-kfQCE",
  authDomain: "knox-fm-77ce2.firebaseapp.com",
  projectId: "knox-fm-77ce2",
  storageBucket: "knox-fm-77ce2.appspot.com",
  messagingSenderId: "813437172233",
  appId: "1:813437172233:web:6c1c2f82d95a169c5756d8",
  measurementId: "G-W9FJL2NCCW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app)
const profileImageName = "Profile"


export const downloadFiles = async () => {
  const listRef = ref(storage, 'files/');
  const items = (await listAll(listRef)).items;
  const tempArray = []
  await Promise.all(items.map(async (item) => {
    const response = await getDownloadURL(item);
    tempArray.push(response)
  }))
  return tempArray
}

export const downloadProfileImage = async () => {
  const profileRef = ref(storage, 'Profile/Profile');
  const response = await getDownloadURL(profileRef);
  return response
}

export const uploadProfileImage = async (file) => {
  if (!file) return;
  const storageRef = ref(storage, `Profile/${profileImageName}`);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!', snapshot);
  });
}

export const uploadFiles = (file) => {
  if (!file) return;
  const storageRef = ref(storage, `files/${file.name}`);
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log('Uploaded a blob or file!', snapshot);
  });
};