export const NoteSchema = {
  name: 'Note',
  primaryKey: 'id',
  properties: {
    id: 'string',
    title: {type: 'string', indexed: true},
    content: 'string',
    attachment: {type: 'data', optional: true},
    date_created: 'date',
  },
};
