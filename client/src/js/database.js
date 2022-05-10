import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('Post to the ase');
  //open the connection to the database
  const jateDb = await openDB('jate', 1);
  //conduct the transaction that will allow us to perform the readwrite action
  const tx = jateDb.transaction('jate', 'readwrite');
  //we will store the text into the jate object store
  const store = tx.objectStore('jate');
  //using put method store the object (item then the key)
  const request = store.put({id: 1, value: content});
  // const request = store.put(content);
  //await req and save to result console log the result once complete
  const result = await request;

  if(result){

    console.log('🚀 - data saved to the database', result);
  }
  //error if put not implemented.
  else{

    console.error('putDb not implemented');
  }
}
// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');
  //open the connection to the database
  const jateDb = await openDB('jate', 1);
  //conduct the transaction that will allow us to perform the readwrite action
  const tx = jateDb.transaction('jate', 'readwrite');
  //everything will be read only
  const store = tx.objectStore('jate');

  // const request = store.getAll();
  const request = store.get(1);
  const result = await request;
  // if(result){

  //   console.log('result.value', result);
  // }
  // else{

  //   console.error('getDb not implemented');
    
  // }
  return result ? result?.value : [];
}
initdb();
