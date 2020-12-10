import Realm from 'realm';

const NoteSchema = {
  name: 'Note',
  primaryKey: 'id',
  properties: {
    id: 'int',
    title: {type: 'string', indexed: true},
    text: 'string',
    attachment: {type: 'data', optional: true},
    date_created: 'date',
  },
};

const databaseOptions = {
  path: 'myDiaryApp.realm',
  schema: [NoteSchema],
  schemaVersion: 0,
};

// Schema Methods
const getAllNotes = () =>
  new Promise((resolve, reject) => {
    Realm.open(databaseOptions)
      .then((realm) => {
        const allNotes = realm.objects('Note');
        resolve(allNotes);
      })
      .catch((error) => {
        reject(error);
      });
  });

export {getAllNotes};
export default new Realm(databaseOptions);
