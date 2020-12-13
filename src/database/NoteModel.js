import {database} from './index';

// Schema Methods
const getNotes = () =>
  new Promise((resolve, reject) => {
    database()
      .then((realm) => {
        const allNotes = realm.objects('Note').sorted('date_created', true);
        resolve(allNotes);
      })
      .catch((error) => {
        reject(error);
      });
  });

const createNote = (note) =>
  new Promise((resolve, reject) => {
    database().then((realm) => {
      try {
        realm.write(() => {
          const res = realm.create('Note', note);
          resolve(res);
        });
      } catch (e) {
        console.log(e);
        reject();
      }
    });
  });

const updateNote = (note) =>
  new Promise((resolve, reject) => {
    database().then((realm) => {
      try {
        realm.write(() => {
          console.log('written');
          const res = realm.create('Note', note, true);
          resolve(res);
        });
      } catch (e) {
        console.log(e);
        reject();
      }
    });
  });

const deleteNote = (id) =>
  new Promise((resolve, reject) => {
    database().then((realm) => {
      try {
        realm.write(() => {
          // realm.delete()
          let deletingNote = realm.objectForPrimaryKey('Note', id);
          realm.delete(deletingNote);
          resolve();
        });
      } catch (e) {
        console.log(e);
        reject();
      }
    });
  });

export {getNotes, createNote, updateNote, deleteNote};
