import { db } from '@/app/utils/firebase';
import { collection, getDocs, addDoc, query } from 'firebase/firestore';

export async function getItems(userId) {
  if (!userId) {
    throw new Error('User ID is required.');
  }
  try {
    //Building a reference to the subcollections: users/{userId}/items
    const itemsRef = collection(db, 'users', userId, 'items');
    //Wrapping the collection in a query object
    const itemsQuery = query(itemsRef);
    //executing the query and wait for Firestore to return a snapshot
    const snapshot = await getDocs(itemsQuery);
    //Tranforming the snapshot into an array of JS objects
    const items = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
      };
    });
    //Return array of items
    return items;
  } catch (error) {
    //Logging and rethrowing so UI can decide how to handle error
    console.error('Error in getItems:', error);
    throw error;
  }
}

export async function addItem(userId, item) {
  if (!userId) {
    throw new Error('User ID is required');
  }

  try {
    //referencing the same subcollection as getItems
    const itemsRef = collection(db, 'users', userId, 'items');
    //Adding a new document to the items subcollection
    const docRef = await addDoc(itemsRef, item);
    //Return the new document's Id
    return docRef.id;
  } catch (error) {
    //Log and rethrow for higher level handling
    console.log('Error in addItem:', error);
    throw error;
  }
}
