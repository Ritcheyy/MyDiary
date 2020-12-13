import Realm from 'realm';
import {NoteSchema} from './schema';

export const databaseOptions = {
  path: 'myDiaryApp.realm',
  schema: [NoteSchema],
  schemaVersion: 3,
};

const database = () => {
  return new Realm.open(databaseOptions);
};

export default database();
