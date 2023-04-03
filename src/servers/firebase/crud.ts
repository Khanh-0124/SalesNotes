import firestore from '@react-native-firebase/firestore';

// get
const getData = async (collection: string, doc: string) => {
  const snapshot = await firestore().collection(collection).doc(doc).get();
  return snapshot.data();
};

// add
const addData = async (collection: string, doc: string, fields: any) => {
  try {
    await firestore().collection(collection).doc(doc).set(fields);
    console.log('Fields added!');
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};

// update
const updateData = async (collection: string, doc: string, fields: any) => {
  try {
    await firestore().collection(collection).doc(doc).update(fields);
    console.log('Fields updated!');
  } catch (error) {
    console.error('Error updating document: ', error);
  }
};

// delete
const deleteData = async (collection: string, doc: string) => {
  try {
    await firestore().collection(collection).doc(doc).delete();
    console.log('Fields deleted!');
  } catch (error) {
    console.error('Error deleting document: ', error);
  }
};
