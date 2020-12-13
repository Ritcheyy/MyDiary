import {FETCH_NOTES, ADD_NOTE, REMOVE_NOTE} from '../actionTypes';
import {getNotes, createNote, deleteNote} from '../../database/NoteModel';

export const fetchNotes = () => (dispatch) => {
  return getNotes()
    .then((res) => {
      return dispatch({
        type: FETCH_NOTES,
        payload: res,
      });
    })
    .catch((error) => {
      return error;
    });
};

export const addNote = (note) => (dispatch) => {
  return createNote(note)
    .then((res) => {
      return dispatch({
        type: ADD_NOTE,
        payload: res,
      });
    })
    .catch((error) => {
      return error;
    });
};

export const removeNote = (id) => (dispatch) => {
  return deleteNote(id)
    .then(() => {
      return dispatch({
        type: REMOVE_NOTE,
        payload: id,
      });
    })
    .catch((error) => {
      return error;
    });
};
