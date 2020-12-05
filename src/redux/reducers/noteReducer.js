import {FETCH_NOTES} from '../actionTypes';

const initialState = {
  notes: [
    {
      id: 1,
      title: 'How to make your personal brand stand out online',
      date: 'May 21, 2020',
    },
    {
      id: 2,
      title: 'Beautiful weather app Ui concepts we wish existed',
      date: 'May 18, 2020',
    },
    {
      id: 3,
      title: '10 excellent font pairing tools for designers',
      date: 'August 18, 2020',
    },
    {
      id: 4,
      title: 'How to make your personal brand stand out online',
      date: 'May 21, 2020',
    },
    {
      id: 5,
      title: 'Beautiful weather app Ui concepts we wish existed',
      date: 'May 18, 2020',
    },
    {
      id: 6,
      title: '10 excellent font pairing tools for designers',
      date: 'August 18, 2020',
    },
    {
      id: 7,
      title: 'Design For Good: Join The  Face Mask Challenge',
      date: 'May 21, 2020',
    },
    {
      id: 8,
      title: 'How to make your personal brand stand out online',
      date: 'May 21, 2020',
    },
    {
      id: 9,
      title: 'Beautiful weather app Ui concepts we wish existed',
      date: 'May 18, 2020',
    },
    {
      id: 10,
      title: '10 excellent font pairing tools for designers',
      date: 'August 18, 2020',
    },
    {
      id: 11,
      title: 'How to make your personal brand stand out online',
      date: 'May 21, 2020',
    },
    {
      id: 12,
      title: 'Beautiful weather app Ui concepts we wish existed',
      date: 'May 18, 2020',
    },
    {
      id: 13,
      title: '10 excellent font pairing tools for designers',
      date: 'August 18, 2020',
    },
    {
      id: 14,
      title: 'How to make your personal brand stand out online',
      date: 'May 21, 2020',
    },
  ],
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return;
    default:
      return state;
  }
};

export default noteReducer;
